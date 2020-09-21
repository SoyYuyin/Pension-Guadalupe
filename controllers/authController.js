const path = require('path');

module.exports.signup_get = (req, res) => {
  res.sendFile(path.join(__dirname,'../views/signup.html'));
}

module.exports.login_get = (req, res) => {
  res.sendFile(path.join(__dirname,'../views/login.html'));
}

module.exports.signup_post = (req, res) => {
  res.render('new signup');
}

module.exports.login_post = (req, res) => {
res.render('user login');
}

