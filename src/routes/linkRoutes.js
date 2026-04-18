import express from 'express';
const router = express.Router();

let links = [];

// GET all links
router.get('/', (req, res) => {
  res.json(links);
});

// ADD link
router.post('/', (req, res) => {
  const newLink = {
    _id: Date.now().toString(),
    url: req.body.url,
    title: req.body.url,
    favorite: false
  };

  links.push(newLink);
  res.json(newLink);
});

// DELETE
router.delete('/:id', (req, res) => {
  links = links.filter(link => link._id !== req.params.id);
  res.json({ message: "Deleted" });
});

// TOGGLE FAVORITE
router.patch('/:id/favorite', (req, res) => {
  links = links.map(link =>
    link._id === req.params.id
      ? { ...link, favorite: !link.favorite }
      : link
  );

  res.json({ message: "Updated" });
});

export default router;