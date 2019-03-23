const express = require('express');
const app = express();
const passport = require('passport');
const Strategy = require('passport-http').BasicStrategy;
const ENV = require('dotenv').config().parsed;

const ENUMS = require('./util/enums');
if (!ENV) throw Error('must create ./.env file. please look at .env-sample for reference');
if (!ENV.MODE || !Object.values(ENUMS.MODES).includes(ENV.MODE)) throw Error('ENV/must provide proper MODE');
if (!ENV.PORT || !/[0-9]{4}/.test(ENV.PORT)) throw Error('ENV/must input proper 4 digit PORT');
if (!ENV.JWTKEY) throw Error('ENV/must provide JWTKEY');
// ENV.MODE = 'development';
const { createToken } = require('./util/jwtauth');


app.use(express.static('public'));
passport.use(new Strategy((id, pw, done) => {
  console.log('login try', id, pw);
  // when error -> return done(err);
  if (id === 'park' && pw === 'test') {
    const token = createToken({ id, userName: 'sungryeol' }); // create a token
    return done(null, { token });
  }
  return done(null, false); // automatically returns unauthorized response
}));

if (ENV.MODE === 'development') {
  // disable CORS for dev
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // for using JWT
    next();
  });
}

const authRouter = require('./routers/auth');
const postRouter = require('./routers/post');
const errorHandler = require('./controllers/errorHandler');
const notFound = require('./controllers/notFound');

app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('*', notFound);
app.use(errorHandler);

const portnum = parseInt(ENV.PORT, 10);
app.listen(portnum, () => {
  console.log(`listening to ${portnum}, mode ${ENV.MODE}`);
});
