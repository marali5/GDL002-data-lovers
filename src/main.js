const data = (window.POKEMON.pokemon);

let buttons= Array.from(document.getElementsByClassName("botonAccion"));


for(let i = 0; i<= buttons.length ; i++) {
   buttons[i].addEventListener("click",()=>{
       console.log("hola")
      });
}

const dataLovers = (data, type) => {
   const newArray= data.filter (pokemon => (pokemon.type[0] == type || pokemon.type[1] == type);
   console.log(newArray);
   document.getElementById("listaDePokemones").innerHTML=  `<div><h2>${data.name}</h2><p>${data.type}  ${data.number}</p></div>`;
   listaDePokemones.addEventListener("click", dataLovers);
   newArray.forEach(element => console.log(element.name));
   let pokeFilter= newArray.map(function(dataLovers){
      return '<li>'+data[0].name+' '+data[1].type+' '+data[2].number'</li>'
    })
    document.getElementById("listaDePokemones").innerHTML = pokeFilter;
   console.log(data);
  }




//let dataFilter= .filter( => .length[i]);

// filterData = POKEMON.pokemon.filter(POKEMON.pokemon.Water[0] = Water || POKEMON.pokemon.Water[1]);
//let filter= document.getElementById("Water").innerHTML = POKEMON.pokemon.filter(filterData);
//console.log("ttt");

//let filterData= (data, condition) => {
  // POKEMON.pokemon.Water;
//}

//let filter= () => {
  // document.getElementById("Water").innerHTML = buttons.filter(filter);
//}


//const newArray.forEach(elemento=>(container(newArray)));



//let filterPokemon= filterData.filter(pokemon => pokemon.type[0] = condition|| pokemon.type[1] = condition;
//filterPokemon= 
//})
//console.log(filterData);


// buttons= Array.from(document.getElementsByClassName("botonAccion"));

//console.log(buttons[0].addEventListener("click", () => {console.log("hola")}));
//console.log(buttons[1].addEventListener("click", () => {console.log("adios")}));
//for (let i = 0; i <= buttons.lenght; i++) {console.log(buttons[i].addEventListener("click", () => {console.log("hola")}));

//}

//const filterData= (POKEMON, type) => {
   // let filter=POKEMON.pokemon.length[0];
    //pokemon[i]=type;

    //filterData.push=pokemon[i].name;
    //filterData.push=pokemon[i].image;

    //return filter;
//}
 

//Array.filter(POKEMON.pokemon) {
//return (pokemon.type === water);
//})

//console.log(newArr);





//const buttons = (data, type) {}

//const button = document.getElementById('button');
//button.addEventListener('click', function(event) {
  //console.log('button capture');
//}, true);
//const dataLovers= () => {
   // POKEMON.pokemon.water
//}
