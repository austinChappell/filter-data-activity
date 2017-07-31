const express = require('express'),
      app = express(),
      mustacheExpress = require('mustache-express');

const characterData = require('./models/characters'),
      SeriesCodes = require('./models/series-codes'),
      characterRoutes = require('./routes/characters');

let port = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use('/', characterRoutes)

app.listen(port, (req, res) => {
  console.log(`Your app is running on PORT ${ port }.`);
});
