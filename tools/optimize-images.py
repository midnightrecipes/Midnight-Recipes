#!/usr/bin/env python3
"""Shrink big recipe photos in place (same file names, so data.js and the manifest keep working).

  python3 tools/optimize-images.py            # do it
  python3 tools/optimize-images.py --dry-run  # only report what would change

Needs Pillow:  pip install Pillow
Rule: any step/recipe photo whose longest side is over 1600 px or whose file is over 350 KB is
re-saved as a progressive JPEG (quality 82, max 1600 px, EXIF rotation applied, metadata removed).
A file is only replaced if the result is smaller. hero.jpg is left alone (it is already small).
Keep a backup/commit before the first run; this overwrites the originals.
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

MAX_SIDE, QUALITY, MIN_BYTES = 1600, 82, 350 * 1024
dry = '--dry-run' in sys.argv
root = Path(__file__).resolve().parents[1] / 'images' / 'recipes'
before = after = changed = 0
for p in sorted(root.rglob('*')):
    if not p.is_file() or p.suffix.lower() not in ('.jpg', '.jpeg'):
        continue
    if p.stem.lower().startswith('hero'):
        continue
    size = p.stat().st_size
    with Image.open(p) as im:
        big = max(im.size) > MAX_SIDE
        if not big and size <= MIN_BYTES:
            continue
        img = ImageOps.exif_transpose(im).convert('RGB')
        if big:
            img.thumbnail((MAX_SIDE, MAX_SIDE), Image.Resampling.LANCZOS)
        tmp = p.with_name(p.name + '.tmp')
        img.save(tmp, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
    new = tmp.stat().st_size
    if new < size:
        before += size; after += new; changed += 1
        print(f'{p.relative_to(root.parent.parent)}: {size//1024} KB -> {new//1024} KB')
        if not dry:
            tmp.replace(p)
        else:
            tmp.unlink()
    else:
        tmp.unlink()
print(f'\n{changed} files, {before/1e6:.1f} MB -> {after/1e6:.1f} MB' + ('  (dry run, nothing written)' if dry else ''))
