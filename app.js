const express = require('express'),
      app = express(),
      mustacheExpress = require('mustache-express');

const characters = require('./models/characters');
let data = { characters }

let port = process.env.PORT || 3000;

function filter(data, series) {
  let result = data.characters.filter(function(person) {
    return person.type == series;
  });
  return result;
};

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/all', (req, res) => {
  console.log(data.characters);
  res.render('all-characters', data);
});

app.get('/:series', (req, res) => {
  let newArray = filter(data, req.params.series);
  seriesData = { characters: newArray };
  console.log(data);
  res.render('series-characters', seriesData);
});

app.listen(port, (req, res) => {
  console.log(`Your app is running on PORT ${ port }.`);
});
