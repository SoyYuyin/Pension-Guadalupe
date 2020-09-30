const path = require('path');
const User = require('../models/user')

module.exports.signup_get = (req, res) => {
  res.sendFile(path.join(__dirname,'../views/signup.html'));
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password }); // This is asynchronous, so we add await and make the parent function async
    res.status(201).json(user) // success and created new resource (user)

  }
  catch (err) {
    console.log(err);
    res.status(400).send('error, user not created');
  }
}

module.exports.login_get = (req, res) => {
  res.sendFile(path.join(__dirname,'../views/login.html'));
}

module.exports.login_post = async (req, res) => {
  res.send('user login')
}

