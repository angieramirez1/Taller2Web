const express = require('express');

const path = require('path');

const exphbs = require('express-handlebars');

const products = require('./products')

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/home', function (request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/store', function (req, res) {
  
  var filtered = products;
  
  if(req.query.price_lt){
    filtered = products.filter(function(elem){
      if(elem.price < req.query.price_lt){
        return true;
      }
    });
  }
  if(req.query.price_gt){
    filtered = products.filter(function(elem){
      if(elem.price > req.query.price_gt){
        return true;
      }
    });
  }
  
  if(req.query.search){
    filtered = products.filter(function(elem){
      if(elem.playerMode.includes(req.query.search)){
        return true;
      }
    });
  }
  var context = {
    list: filtered,
  }
  res.render('shop', context);
});

app.get('/product/:name/:id', function (req, res) {
  var context = {};
  var foundElement =  products.find(function(elem){
    if(elem.title == req.params.name){
      return true;
    }
  });
  context = foundElement;
  res.render('product', context);
});

app.listen(3000, function () {
    console.log('servidor iniciado');
  });
