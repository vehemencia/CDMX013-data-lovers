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

// ESTE NO TOCAR SOLO ESTÁ COMENTADO
let dropDownMenu = document.getElementById("sortingMenu");
dropDownMenu.addEventListener("change", function pruebaUno() {
    //console.log(document.getElementById("sortingMenu").value);
    if (dropDownMenu.value === "AZ"){
        console.log(movieNames.sort())
    }
    if (dropDownMenu.value === "ZA"){
        console.log("adiós")
    }
} );

// let arrayTest = ['Canon', 'Sony', 'Olympus', 'Minolta', 'Fuji'];

// function compareElements(a, b) {
//     if (a > b) {
//         return -1;
//     }
// }