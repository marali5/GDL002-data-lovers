require('../src/data.js');

const pokemon = require('../src/data/pokemon/pokemon.js');

describe('Pokemon', () => {
  it('should be an object', () => {
    expect(typeof pokemon).toBe('object');
  });
});

describe("dataLovers", () => {
  it("should return pokemon type", () => {
    expect(dataLovers.pokemon.type(pokemon) ).toBe ("pokemon type");
  });
});

 // it('returns `example`', () => {
   // expect(example()).toBe('example');
 // });

