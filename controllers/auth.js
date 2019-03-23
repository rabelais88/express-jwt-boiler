
exports.login = (req, res, next) => {
  console.log('trying to reach login page');
  res.status(200).json({ valid: true, token: req.user.token });
};


/*
// actual login using basic auth
var session_url = 'http://api_address/api/session_endpoint';
var uname = 'user';
var pass = 'password';
axios.post(session_url, {}, {
  auth: {
    username: uname,
    password: pass
  }
}).then(function(response) {
  console.log('Authenticated');
}).catch(function(error) {
  console.log('Error on Authentication');
});
*/
