const characters = [
  {name: 'Luke Skywalker', type: 'sw'},
  {name: 'Darth Vader', type: 'sw'},
  {name: 'Princess Leia', type: 'sw'},
  {name: 'Java the Hut', type: 'sw'},
  {name: 'Yoda', type: 'sw'},
  {name: 'Han Solo', type: 'sw'},
  {name: 'Spock', type: 'st'},
  {name: 'Captain Kirk', type: 'st'},
  {name: 'Uhura', type: 'st'},
  {name: 'Scotty', type: 'st'},
];

function filterData(data, series) {
  let result = data.characters.filter(function(person) {
    return person.type == series;
  });
  return result;
};

module.exports = { characters, filterData };
