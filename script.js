let pokemon = 1;
let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
let buttonFree = true;

function backgroundColor(pokemonTypeColor) {
    let r;
    let g;
    let b;
    if (pokemonTypeColor == "normal") {
        r = 148;
        g = 179;
        b = 207;

    } else if (pokemonTypeColor == "fire") {
        r = 197;
        g = 115;
        b = 109;

    } else if (pokemonTypeColor == "water") {
        r = 31;
        g = 84;
        b = 201;

    } else if (pokemonTypeColor == "grass") {
        r = 148;
        g = 207;
        b = 148;

    } else if (pokemonTypeColor == "flying") { 
        r = 110;
        g = 121;
        b = 146;

    } else if (pokemonTypeColor == "fighting") {
        r = 148;
        g = 179;
        b = 207;

    } else if (pokemonTypeColor == "poison") {
        r = 25;
        g = 192;
        b = 95;

    } else if (pokemonTypeColor == "electric") {
        r = 248;
        g = 241;
        b = 143;

    } else if (pokemonTypeColor == "ground") {
        r = 197;
        g = 119;
        b = 83;

    } else if (pokemonTypeColor == "rock") {
        r = 153;
        g = 121;
        b = 108;

    } else if (pokemonTypeColor == "psychic") {
        r = 100;
        g = 103;
        b = 150;

    } else if (pokemonTypeColor == "ice") {
        r = 114;
        g = 195;
        b = 233;

    } else if (pokemonTypeColor == "bug") {
        r = 148;
        g = 207;
        b = 148;

    } else if (pokemonTypeColor == "ghost") {
        r = 190;
        g = 203;
        b = 209;

    } else if (pokemonTypeColor == "steel") {
        r = 43;
        g = 44;
        b = 44;

    } else if (pokemonTypeColor == "dragon") {
        r = 194;
        g = 151;
        b = 194;

    } else if (pokemonTypeColor == "poison") {
        r = 49;
        g = 33;
        b = 136;

    } else if (pokemonTypeColor == "fairy") {
        r = 230;
        g = 113;
        b = 152;

    }
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function buttonSettings() {
    timer_interval = setInterval(() => {
        buttonElement.dataset.selected = true;
        clearInterval(timer_interval);
    }, 200);
}

function apiReturn(api_image, pokemonName, pokeType) {
    let image = document.getElementById("image");
    let pokemonNameText = document.getElementById("pokemon-name");
    let pokemonType = pokeType;
    pokemonNameText.innerHTML = pokemonName;
    image.src = api_image;
    buttonSettings()
    backgroundColor(pokemonType);
    buttonFree = true;
}

function getPokemonDetail() {
    buttonFree = false;
    return fetch(url) 
        .then((response) => response.json())
        //.then((log) => console.log(log))
        .then((teste) => apiReturn(teste.sprites.other["official-artwork"].front_default, teste.name, teste.types[0].type.name))
}

function botao(){
    if (buttonFree === true){
        buttonElement = document.getElementById("button");
        buttonElement.dataset.selected = false;
        pokemon++;
        url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        getPokemonDetail();
    }
}

getPokemonDetail();