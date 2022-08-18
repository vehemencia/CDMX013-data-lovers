import { globalFilter } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

// Obteniendo el arreglo con 20 elementos
const allGhibliFilms = ghibli.films;

let rootInDOM = document.getElementById("root");

// Aquí con .map() logramos llamar cada elemento (la -propiedad-) dentro del arreglo
export function showCards(filmsToShow) {
    if(filmsToShow.length != 0){
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
    })
}
    rootInDOM.innerHTML = `<h1>No hay ninguna película que corresponda con la selección de tus filtros, límpialos e intenta de nuevo. 🌺</h1>`;
}

showCards(allGhibliFilms);

const cleanCards = () => rootInDOM.innerHTML = "";

let releaseYearMenu = document.getElementById("movieyears");
let directorMenu = document.getElementById("filmdirector");

// Filtros por año.
if(releaseYearMenu){
releaseYearMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value, allGhibliFilms));
});
}

// Filtros por director.
if(directorMenu){
directorMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value, allGhibliFilms));
});
}

// Ordenamiento.
let sortByMenu = document.getElementById("sortingMenu");
if(sortByMenu){
sortByMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value, allGhibliFilms));
});
}

let resetButton = document.getElementById("resetfilters");
if(resetButton){
resetButton.addEventListener("click", () => {
    cleanCards();
    releaseYearMenu.selectedIndex = 0; // .selectedIndex corresponde al valor que se le otorga a un <option>
    directorMenu.selectedIndex = 0;
    showCards(allGhibliFilms)
});
}
