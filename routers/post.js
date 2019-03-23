const express = require('express');

const { jwtAuth } = require('../util/jwtauth');
const post = require('../controllers/post');

const router = express.Router();

router.post('/', jwtAuth, post.postArticle);

module.exports = router;
