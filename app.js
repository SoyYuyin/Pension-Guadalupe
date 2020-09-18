const express = require('express');

//create express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000);

app.use(express.static('public'))
app.get('/', (req, res) => {
  // res.send('Hello worlddd')
  res.render('index');
  // res.sendFile(

});

