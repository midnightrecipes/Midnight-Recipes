#!/bin/sh
# Run from the repository root:  sh cleanup.sh
# Removes files nothing in the site refers to. Review before committing.
set -e
git rm -f --ignore-unmatch \
  assets/images/css-bowl.jpg assets/images/css-pie.jpg assets/images/css-step.jpg \
  images/heading-star.png \
  .github/.gitkeep images/recipes/*/.gitkeep
# card-320/640.webp are never loaded by app.js (it uses hero-list.webp)
git rm -f --ignore-unmatch images/recipes/*/card-320.webp images/recipes/*/card-640.webp

# OPTIONAL - draft recipes with no entry in data.js (not shown on the site, but publicly downloadable).
# Uncomment to remove them, or add them to data.js when they are ready:
# git rm -r -f images/recipes/beef-chili images/recipes/sichuan-kung-pao-chicken
echo "done"
