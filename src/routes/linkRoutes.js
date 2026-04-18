// import express from 'express';
// import { createLink, getLinks, deleteLink,toggleFavorite } from '../controllers/linkController.js';
// import { verifyToken } from '../middleware/authMiddleware.js';
// const router = express.Router();



// router.get('/', getLinks);
// router.post('/', createLink);
// router.delete('/:id', deleteLink);
// router.patch('/:id/favorite', toggleFavorite);
// export default router;


import express from 'express';
const router = express.Router();

let links = [];

// GET
router.get('/', (req, res) => {
  res.json(links);
});

// POST
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
  res.json({ message: 'Deleted' });
});

// PATCH
router.patch('/:id/favorite', (req, res) => {
  links = links.map(link =>
    link._id === req.params.id
      ? { ...link, favorite: !link.favorite }
      : link
  );

  res.json({ message: 'Updated' });
});

export default router;