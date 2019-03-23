const express = require('express');
const passport = require('passport');

const auth = require('../controllers/auth');

const router = express.Router();

router.post('/', passport.authenticate('basic', { session: false }), auth.login);

module.exports = router;
