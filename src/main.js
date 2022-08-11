import { filterByDirector, filterByReleaseDate, sortingFilms } from './data.js';
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

let yearSelection = document.getElementById("movieyears");
yearSelection.addEventListener("change", function () {
    cleanCards()
    return showCards(filterByReleaseDate(yearSelection.value));
});

let directorSelection = document.getElementById("filmdirector");
directorSelection.addEventListener("change", function () {
    cleanCards();
    return showCards(filterByDirector(directorSelection.value));
});

let dropDownMenu = document.getElementById("sortingMenu");
dropDownMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(sortingFilms(dropDownMenu.value))
});

let resetButton =document.getElementById("resetfilters");
resetButton.addEventListener("click", function(){
    cleanCards();
    yearSelection.selectedIndex = 0;
    directorSelection.selectedIndex = 0;
    showCards(obtainingFilms)
});
