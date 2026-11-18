from pathlib import Path
from PIL import Image, ImageOps

# app.js loads images/recipes/<slug>/hero-list.webp for recipe cards (2:3 portrait).
# The old card-320/640.webp square crops were never used, so they are no longer generated.
SIZE = (640, 960)
root = Path('images/recipes')
for folder in sorted(root.iterdir()):
    if not folder.is_dir():
        continue
    source = next((p for p in folder.iterdir() if p.is_file() and p.stem.lower() == 'hero' and p.suffix.lower() in ('.jpg', '.jpeg')), None)
    if source is None:
        continue
    target = folder / 'hero-list.webp'
    if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
        continue
    with Image.open(source) as original:
        image = ImageOps.fit(ImageOps.exif_transpose(original).convert('RGB'), SIZE, method=Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=80, method=6)
    print(f'Generated {target}')
