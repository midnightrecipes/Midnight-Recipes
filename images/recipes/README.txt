MIDNIGHT RECIPES PHOTO RULES

Store recipe photos in this folder.

Hero (2:3 display):
  <slug>-hero.jpg

Card (1:1 display; optional):
  <slug>-card.jpg

Step photos (1:1 display; optional, 0–3+):
  <slug>-step-01.jpg
  <slug>-step-02.jpg
  <slug>-step-03.jpg

In assets/js/data.js, use:
  heroImage: "images/recipes/<slug>-hero.jpg",
  cardImage: "images/recipes/<slug>-card.jpg",
  stepImages: [
    "images/recipes/<slug>-step-01.jpg",
    "images/recipes/<slug>-step-02.jpg"
  ]

If cardImage is omitted, heroImage is used for cards. If stepImages is empty or omitted, no step photo is shown. Images are cropped with object-fit: cover; they are never stretched.
