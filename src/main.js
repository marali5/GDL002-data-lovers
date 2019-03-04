let card = document.querySelector("#listaDePokemones");

let buttons= Array.from(document.getElementsByClassName("botonAccion"));
console.log (buttons);

for(let i = 0; i < buttons.length ; i++) {
 buttons[i].addEventListener("click",()=>{
       dataLovers(POKEMON.pokemon, buttons[i].getAttribute('id'));
    });
}

const showCard= (data) => {
    document.getElementById("listaDePokemones").innerHTML = "";
 for (let i=0;i<data.length; i++){
 const listaDePokemones= document.getElementById("listaDePokemones");
 const div=document.createElement("div");
 div.innerHTML = pokemonTemplate(data[i]);
 listaDePokemones.appendChild(div);
 }
};

function pokemonTemplate (singlePokemon) {
    let pokemonCardTemplate= `
    <div id= "info" class= "singlePokemon">
    <button class="namepk">${singlePokemon.name}
    <img src="${singlePokemon.img}">"${singlePokemon.type}"<br>${singlePokemon.num}"</button>
    </div>
    `;
    return pokemonCardTemplate;
}

//const orderList = document.getElementById('order');

  //  orderList.addEventListener('change', () => {

    //    window.dataLovers.order(POKEMON.pokemon,status);

      //  showCard(newArray);

    //});



