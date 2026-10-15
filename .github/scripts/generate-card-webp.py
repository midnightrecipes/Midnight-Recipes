from pathlib import Path
from PIL import Image, ImageOps

root = Path('images/recipes')
for folder in sorted(root.iterdir()):
    if not folder.is_dir():
        continue
    source = next((folder / name for name in ('recipe.jpg', 'hero.jpg') if (folder / name).exists()), None)
    if source is None:
        continue
    for size in (320, 640):
        target = folder / f'card-{size}.webp'
        if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
            continue
        with Image.open(source) as original:
            image = ImageOps.fit(ImageOps.exif_transpose(original).convert('RGB'), (size,size), method=Image.Resampling.LANCZOS)
            image.save(target, 'WEBP', quality=78, method=6)
        print(f'Generated {target}')
