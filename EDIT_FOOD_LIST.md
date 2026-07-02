# How to edit the food picker

Edit this file:

`food-list.js`

Each food is directly inside either `sugar` or `salty`.

## Add a food

Copy this shape:

```js
{
  name: "Mozzarella sticks",
  image: "https://example.com/mozzarella-sticks.jpg"
}
```

## Change a picture

Replace only the `image` URL:

```js
image: "https://example.com/new-photo.jpg"
```

Use a direct image link ending in something like `.jpg`, `.png`, or `.webp`, or an Unsplash `images.unsplash.com/...` link.

Save `food-list.js`, then refresh `http://127.0.0.1:4173/`.
