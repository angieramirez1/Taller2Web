const express = require('express');

const path = require('path');

const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/home', function (request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/store', function (req, res) {
  res.render('shop');
});

app.get('/product', function (req, res) {
  var context = {
    title: 'Titulo del juegos',
    description: 'Descripción del juego',
    price: 'Precio',
    img: '/images/juego1.png'
  }
  res.render('product', context);
});

app.listen(3000, function () {
    console.log('servidor iniciado');
  });
