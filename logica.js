const anterior = document.getElementById('anterior')
const siguiente = document.getElementById('siguiente')
const targetas = document.getElementById('targetas')
let primero = 1;
let ultimo = 7;



async function getPokemon (id){
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    /*let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    fetch(url)*/
        .then(Response => Response.json())
        .then(data => pintar(data))
        .catch(error => console.log(error))
}

function pintar (data){
    let contenido = `<article id="pokemones"><img src="${data.sprites.front_default}" alt="${data.name}" id="imagenes"><span id="nombrePokemon">${data.name}</span> <br><span id="idPokemon">${data.id}</span></article>`
    document.getElementById('targetas').innerHTML += contenido;
}

function orden (primero, ultimo){
    for (let i = primero; i <= ultimo + primero; i++){
        getPokemon(i)
    }
}

anterior.addEventListener('click', () => {
    if(primero != 1){
        primero -= 8;
        limpiar(targetas);
        orden (primero, ultimo);
    }
})

siguiente.addEventListener('click', () => {
        primero += 8;
        limpiar(targetas);
        orden (primero, ultimo);
})

function limpiar (parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

orden(primero, ultimo);