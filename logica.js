const anterior = document.getElementById('anterior')
const siguiente = document.getElementById('siguiente')
const tarjetas = document.getElementById('tarjetas')
const volver = document.getElementById('volver')
const navLista = document.getElementById('navLista')
let buscador = document.getElementById('buscador')
let buscar = document.getElementById('buscar')
let primero = 1;
let ultimo = 8;

function getPokemon (id){
    const url = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(Response => Response.json())
        .then(data => pintar(data))
        .catch(error => console.log(error))
}

function pintar (data){
    let contenido = `<article id="pokemones"><img src="${data.sprites.front_default}" alt="${data.name}" id="imagenes"><span id="nombrePokemon">${data.name}</span></article>`
    document.getElementById('tarjetas').innerHTML += contenido;
}

function orden (primero, ultimo){
    for (let i = primero; i <= ultimo + primero; i++){
        getPokemon(i)
    }
}

buscar.onclick = function () {
    let id = buscador.value
    limpiar(tarjetas)
    getPokemon(id)
}

volver.addEventListener('click', () => {
    limpiar(tarjetas);
    orden (primero, ultimo);
})

anterior.addEventListener('click', () => {
    if(primero != 1){
        primero -= 9;
        limpiar(tarjetas);
        orden (primero, ultimo);
    }
})

siguiente.addEventListener('click', () => {
        primero += 9;
        limpiar(tarjetas);
        orden (primero, ultimo);
})

function limpiar (parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

orden(primero, ultimo);