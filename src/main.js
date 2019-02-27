const data = (window.POKEMON.pokemon);

let buttons= Array.from(document.getElementsByClassName("botonAccion"));
console.log (buttons);

for(let i = 0; i < buttons.length ; i++) {
 buttons[i].addEventListener("click",()=>{
       dataLovers(POKEMON.pokemon, buttons[i].getAttribute('id'));
    });
}

const dataLovers = (data, type) => {
 const newArray= data.filter(pokemon => (pokemon.type[0] == type || pokemon.type[1] == type));
 newArray.forEach(element => console.log(element.name));
 print(newArray);
}

const print= (data) => {
 for (let i=0;i<data.length; i++){
 const listaDePokemones= document.getElementById("listaDePokemones");
 const span=document.createElement("span");
 const texto=  document.createTextNode (data[i].name+' '+data[i].type+' '+data[i].num);
 span.appendChild(texto);
 listaDePokemones.appendChild(span);
 }
}


