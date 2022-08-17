import { globalFilter } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

// Obteniendo el arreglo con 20 elementos
export const allGhibliFilms = ghibli.films;
let rootInDOM = document.getElementById("root");

// Aquí con .map() logramos llamar cada elemento (la -propiedad-) dentro del arreglo
export function showCards(filmsToShow) {
    return filmsToShow.map(obj => {
        rootInDOM.innerHTML +=
            `
            <div class="card">
            <h1>${obj.title}</h1>
            <p>(${obj.release_date})</p>
            <img class="cardPoster" src="${obj.poster}"/>
            
            <p>Director: ${obj.director}</p>
            <p>Puntuación: ${obj.rt_score}</p>
            <button class="moreInfoButton">Conoce más</button>
            </div>
            `
    });
}

let firstCards = showCards(allGhibliFilms);

const cleanCards = () => rootInDOM.innerHTML = "";
export const messageInDOM = () => rootInDOM.innerHTML = `<h1>No hay ninguna película que corresponda con la selección de tus filtros, límpialos e intenta de nuevo. 🌺</h1>`;

let releaseYearMenu = document.getElementById("movieyears");
let directorMenu = document.getElementById("filmdirector");

// Filtros por año.
releaseYearMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value));
});

// Filtros por director.
directorMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value));
});

// Ordenamiento.
let sortByMenu = document.getElementById("sortingMenu");
sortByMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value));
});

let resetButton = document.getElementById("resetfilters");
resetButton.addEventListener("click", () => {
    cleanCards();
    releaseYearMenu.selectedIndex = 0; // .selectedIndex corresponde al valor que se le otorga a un <option>
    directorMenu.selectedIndex = 0;
    showCards(allGhibliFilms)
});