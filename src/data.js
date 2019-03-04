
const data = (window.POKEMON.pokemon);

// Filtrado

const dataLovers = (data, type) => {
  const newArray= data.filter(pokemon => (pokemon.type[0] == type || pokemon.type[1] == type));
  newArray.forEach(element => console.log(element.name));
  showCard(newArray);
  return newArray;
 };

 // Ordenar 
 
 window.dataLovers = dataLovers; 