function getPokemon (id){
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    fetch(url)
        .then(Response => Response.json())
        .then(data => pintar(data))
        .catch(error => console.log(error))
}

/*function pintar(data){
    let contenido = `<tr><td>${data.id}</td><td>${data.name}</td><td><img src="${data.sprites.front_default}" alt="${data.id}"</td></tr>`;
    document.getElementById('tabla').innerHTML += contenido;
}*/

function pintar (data){
    let contenido = `<article id="pokemones"><img src="${data.sprites.front_default}" alt="w" id="imagenes"><span id="nombrePokemon">${data.name}</span> <br><span id="idPokemon">${data.id}</span></article>`
    document.getElementById('targetas').innerHTML += contenido;
}

function randomId (){
    for(let i = 0; i < 2; i++){
        let idRandom = (Math.floor(Math.random()*150));
        console.log(idRandom)
        getPokemon(idRandom)
    }
}

nuevo.onclick = function() {
    randomId()
}

/*

let nuevo = document.getElementById('nuevo')

nuevo.onclick = function() {
    let contenido = '<article id="pokemones"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png" alt="w" id="imagenes"><span id="nombrePokemon">asdqwe</span> <br><span id="idPokemon">1</span></article>'
    document.getElementById('targetas').innerHTML += contenido;
}*/