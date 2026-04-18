import Link from '../models/Link.js';
import { fetchMetadata } from '../services/metadataService.js';


export const deleteLink = async (req, res) => {
  try {
    await Link.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Deleted' });

  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ msg: err.message });
  }
};

export const toggleFavorite = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    link.isFavorite = !link.isFavorite;
    await link.save();

    res.json(link);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const createLink = async (req, res) => {
  try {
    const { url } = req.body;

    const newLink = new Link({
      url,
      user: req.user.id // 🔥 important
    });

    await newLink.save();

    res.json(newLink);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getLinks = async (req, res) => {
  try {
    const links = await Link.find({ user: req.user.id });
    res.json(links);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};