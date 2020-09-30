const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const spacesRoutes = require('./routes/spacesRoutes');

require('dotenv').config();

//create express app
const app = express();

// stablish connection to mongogb using mongoose
mongoose.connect(process.env.DBURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then((result) => {app.listen(3000)}) //we start listening for connections only after the connection to the db is successful
.catch((err) => console.log(err));



//register view engine
// app.set('view engine', 'ejs');

app.use(morgan('dev'));


app.use(express.static('public'));


app.get('/', (req, res) => {
  // res.send('Hello worlddd')
  res.sendFile('/views/index.html', {root:__dirname});
  // res.sendFile(
});


//routes
app.use(spacesRoutes); //get spaces, add spaces
app.use(authRoutes); // get signup form page, post signup info, get login page, post signup info



app.use((req, res) => {
  res.sendFile('./views/404.html', {root:__dirname})
})