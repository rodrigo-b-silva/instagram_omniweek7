const express = require('express')
const router = new express.Router();
const multer = require('multer')

const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

router.get('/posts', PostController.index);
router.post('/posts', upload.single('image'), PostController.store);
router.post('/posts/:id/like', LikeController.store);

module.exports = router;