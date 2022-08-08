// import { example, anotherExample } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

// Obteniendo el arreglo con 20 elementos
const obtainingFilms = ghibli.films;

// Aquí con .map() logramos llamar cada elemento (la -propiedad-) dentro del arreglo
function showCards(films) {
    return films.map(obj => {
        document.getElementById("root").innerHTML +=
            `
            <div class="card">
            <h1>${obj.title}</h1>
            <img class="cardPoster" src="${obj.poster}"/>
            <p>Año: ${obj.release_date}</p>
            <p>Director: ${obj.director}</p>
            <p>Puntuación: ${obj.rt_score}</p>
            <button class="moreInfoButton">Conoce más</button>
            </div>
            `
    });
}
let prueba = showCards(obtainingFilms);

const cleanCards = () => document.getElementById("root").innerHTML = "";

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
dropDownMenu.addEventListener("change", function () {
    if (dropDownMenu.value === "AZ") {
        cleanCards();
        let filmsFromAtoZ = obtainingFilms.sort(orderByLetterA);
        return showCards(filmsFromAtoZ);
    }
    if (dropDownMenu.value === "ZA") {
        cleanCards();
        let filmsFromZtoA = obtainingFilms.sort(orderByLetterZ);
        return showCards(filmsFromZtoA);
    }
});

let yearSelection = document.getElementById("movieyears");
yearSelection.addEventListener("change", function () { 
    cleanCards();
    const moviesByYear = obtainingFilms.filter(function filterMovies(movies) {
        if (movies.release_date <= "1989" && yearSelection.value == "80s" || movies.release_date >= "1990" && movies.release_date <= "1999" && yearSelection.value == "90s" || movies.release_date >= "2000" &&  yearSelection.value == "00s")
            return movies.release_date;
    })
    showCards(moviesByYear);
});