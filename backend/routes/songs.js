const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Song = require('../models/Song');

const slugify = (s) =>
  s.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

router.get('/', async (req, res) => {
  res.json(await Song.find().sort({ createdAt: -1 }));
});

router.post('/', auth, async (req, res) => {
  const { title, description, audioUrl, coverUrl, releasedAt } = req.body;
  const slug = slugify(title);
  const song = await Song.create({ title, slug, description, audioUrl, coverUrl, releasedAt });
  res.json(song);
});

module.exports = router;
