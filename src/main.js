import { globalFilter } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

// Obteniendo el arreglo con 20 elementos
export const allGhibliFilms = ghibli.films;

// Aquí con .map() logramos llamar cada elemento (la -propiedad-) dentro del arreglo
function showCards(filmsToShow) {
    return filmsToShow.map(obj => {
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

let firstCards = showCards(allGhibliFilms);

const cleanCards = () => document.getElementById("root").innerHTML = "";

let releaseYearMenu = document.getElementById("movieyears");
let directorMenu = document.getElementById("filmdirector");

// Filtros por año.
releaseYearMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value,directorMenu.value, sortByMenu.value));
});

// Filtros por director.
directorMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value,directorMenu.value, sortByMenu.value));
});

// Ordenamiento.
let sortByMenu = document.getElementById("sortingMenu");
sortByMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value,directorMenu.value, sortByMenu.value));
});

let resetButton = document.getElementById("resetfilters");
resetButton.addEventListener("click", () => {
    cleanCards();
    releaseYearMenu.selectedIndex = 0; // .selectedIndex corresponde al valor que se le otorga a un <option>
    directorMenu.selectedIndex = 0;
    showCards(allGhibliFilms)
});


