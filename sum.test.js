const characterData = require('./models/characters');

test('Pull Star Wars characters', () => {
  expect(characterData.filterData(characterData, 'sw')[0].name).toBe('Luke Skywalker');
  expect(characterData.filterData(characterData, 'sw').length).toBe(6);
});

test('Pull Star Trek characters', () => {
  expect(characterData.filterData(characterData, 'st')[0].name).toBe('Spock');
  expect(characterData.filterData(characterData, 'st').length).toBe(4);
});
