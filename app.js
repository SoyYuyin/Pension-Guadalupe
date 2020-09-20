const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Space = require('./models/space');

//create express app
const app = express();

// stablish connection to mongogb using mongoose
const dbURI = 'mongodb+srv://soyyuyin:XwBVF0JRHMkUkYYf@soyyuyin.02szu.mongodb.net/pension?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {app.listen(3000)}) //we start listening for connections only after the connection to the db is successful
.catch((err) => console.log(err));



//register view engine
// app.set('view engine', 'ejs');

app.use(morgan('dev'));



app.use(express.static('public'))

app.get('/add-space', (req,res) =>{
  const space = new Space({
    space:'Lugar de estacionamiento, sin techo',
    details: 'Dentro de la pensión con guardia de seguridad',
    availability: true
  });

  space.save() //this is asynchronous
    .then((result)=> {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
});


app.get('/', (req, res) => {
  // res.send('Hello worlddd')
  res.sendFile('/views/index.html', {root:__dirname});
  // res.sendFile(
});

lugares = [
  {"lugar":"bodega", "descripcion":"400 m2, con baño y mas cosas"},
  {"lugar":"Esta informacion", "descripcion":"viene de mi servidor de express"},
  {"lugar":"local", "descripcion":"Sobre avenida principal, con bañoooooo"},
  {"lugar":"local", "descripcion":"Sobre avenida principal, con bañoooooo"},
  {"lugar":"local", "descripcion":"Sobre avenida principal, con bañoooooo"}
]
app.get('/lugares', (req, res) => {
  res.send(lugares)
})
