const express = require('express'),
      router = express.Router();

const data = require('../models/characters'),
      seriesCodes = require('../models/series-codes');

router.use((req, res, next) => {
  next();
});

router.get('/all', (req, res) => {
  let indexData = {data, seriesCodes}
  console.log(data);
  res.render('all-characters', indexData);
});

router.get('/:series', (req, res) => {
  let seriesIndex;
  for (let i = 0; i < seriesCodes.length; i++) {
    if (seriesCodes[i].url === req.params.series) {
      seriesIndex = i;
      console.log(seriesIndex);
    }
  }
  let newArray = data.filterData(data, seriesCodes[seriesIndex].code);
  seriesData = { characters: newArray };
  res.render('series-characters', seriesData);
});

module.exports = router;
