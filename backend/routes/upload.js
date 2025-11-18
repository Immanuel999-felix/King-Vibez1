const express = require('express');
const multer = require('multer');
const auth = require('../middleware/authMiddleware');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => cb(null, uuidv4() + path.extname(file.originalname))
});

const upload = multer({ storage });

router.post('/image', auth, upload.single('file'), (req, res) => {
  res.json({ ok: true, url: `${process.env.BASE_URL}/uploads/${req.file.filename}` });
});

module.exports = router;
