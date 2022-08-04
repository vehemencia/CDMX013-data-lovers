// import { example, anotherExample } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

// Obteniendo el arreglo con 20 elementos
let obtainingFilms = ghibli.films;
// console.log(films);

// Aquí con .map() logramos llamar cada elemento (la -propiedad-) dentro del arreglo
let showingCards = obtainingFilms.map(obj => {
    document.getElementById("root").innerHTML +=
        `
        <div class="card">
        <h1>${obj.title}</h1>
        <img class="cardPoster" src="${obj.poster}"/>
        <button class="moreInfoButton">Conoce más</button>
        
        </div>
        `
});

// // Acá probamos el método .sort(), que nos devolvió el arreglo en órden alfabético
let movieNames = obtainingFilms.map(obj => {
    return obj.title;
});
// console.log(movieNames);
// console.log(movieNames.sort());

let filmsByName = obtainingFilms;
function orderByLetterA(a, b) {
    if (a.title < b.title) {
        return -1;
    }
}
function orderByLetterZ(a, b) {
    if (a.title > b.title) {
        return -1;
    }
}

let dropDownMenu = document.getElementById("sortingMenu");
dropDownMenu.addEventListener("change", function pruebaUno() {
    if (dropDownMenu.value === "AZ") {
        let sortedTitlesA = filmsByName.sort(orderByLetterA);
        //console.log(filmsByName.sort(orderByLetterA));
        let onlyNames = (sortedTitlesA.map(obj => {
            return obj.title + " " + obj.poster;
        }));
        console.log(onlyNames);
    }
    if (dropDownMenu.value === "ZA") {
        let sortedTitlesZ = filmsByName.sort(orderByLetterZ);
        // console.log(filmsByName.sort(orderByLetterZ));
        let onlyNamesZ = (sortedTitlesZ.map(obj => {
            return obj.title + " " + obj.poster;
        }));
        console.log(onlyNamesZ);
    }
});