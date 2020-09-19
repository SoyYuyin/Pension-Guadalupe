const express = require('express');
const morgan = require('morgan');

//create express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000);

app.use(morgan('dev'));

lugares = [
  {"lugar":"bodega", "descripcion":"400 m2, con baño y mas cosas"},
  {"lugar":"Esta informacion", "descripcion":"viene de mi servidor de express"},
  {"lugar":"local", "descripcion":"Sobre avenida principal, con bañoooooo"}
]

app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.send('Hello worlddd')
  res.sendFile('/views/index.html', {root:__dirname});
  // res.sendFile(

});

app.get('/lugares', (req, res) => {
  res.send(lugares)
})
