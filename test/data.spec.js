require('../src/data.js');

const pokemon = require('../src/data/pokemon/pokemon.js');

describe('Pokemon', () => {
  it('should be an object', () => {
    expect(typeof pokemon).toBe('object');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

