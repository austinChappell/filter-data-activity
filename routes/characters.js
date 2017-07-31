const express = require('express'),
      router = express.Router();

const data = require('../models/characters'),
      seriesCodes = require('../models/series-codes');

router.use((req, res, next) => {
  next();
});

router.get('/all', (req, res) => {
  // let indexData = {data, seriesCodes}
  res.render('all-characters', data);
});

router.get('/:series', (req, res) => {
  let series = req.params.series;
  let newArray = data.filterData(data, seriesCodes[series].code);
  seriesData = { characters: newArray };
  res.render('series-characters', seriesData);
});

module.exports = router;
