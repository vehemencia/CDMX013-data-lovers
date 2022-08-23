import { globalFilter, averageScore, arrayFemale, arrayMale, arrayOtherGenders, minScore, máxScore } from './data.js';
import ghibli from './data/ghibli/ghibli.js';
export const ghibliMovies = ghibli.films;
// Obteniendo el arreglo con 20 elementos
const allGhibliFilms = ghibli.films;
let rootInDOM = document.getElementById("root");
// Aquí con .map() logramos llamar cada elemento (la -propiedad-) dentro del arreglo
export function showCards(filmsToShow) {
    if (filmsToShow.length !=0) {return filmsToShow.map(obj => {
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
    });}
    rootInDOM.innerHTML = `<h1>No hay ninguna película que corresponda con la selección de tus filtros, límpialos e intenta de nuevo. :hibisco:</h1>`;
}
showCards(allGhibliFilms);
const cleanCards = () => rootInDOM.innerHTML = "";
let releaseYearMenu = document.getElementById("movieyears");
let directorMenu = document.getElementById("filmdirector");
// Filtros por año.
releaseYearMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value, allGhibliFilms));
});
// Filtros por director.
directorMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value, allGhibliFilms));
});
// Ordenamiento.
let sortByMenu = document.getElementById("sortingMenu");
sortByMenu.addEventListener("change", function () {
    cleanCards();
    return showCards(globalFilter(releaseYearMenu.value, directorMenu.value, sortByMenu.value, allGhibliFilms));
});
let resetButton = document.getElementById("resetfilters");
resetButton.addEventListener("click", () => {
    cleanCards();
    releaseYearMenu.selectedIndex = 0; // .selectedIndex corresponde al valor que se le otorga a un <option>
    directorMenu.selectedIndex = 0;
    showCards(allGhibliFilms)
});

//Mostrar los datos curiosos

let movieFacts = document.getElementById("moreInfo");
let fullRoot = document.getElementById("completeRoot")
function showFunFacts(){
    movieFacts.style = "display: flex";
    fullRoot.style = "display: none";
    document.getElementById("textGhibli").innerHTML = 
    `
    <h1>¿Sabías cuántos personajes del género femenino y masculino aparecen en las películas de Studio Ghibli?</h1>
    <ul>
    <li>👧 ${arrayFemale.length} personajes femeninos.</li>
    <li>👦 ${arrayMale.length} personajes masculinos.</li>
    <li>❓ ${arrayOtherGenders.length} sin género definido.</li>
    </ul>
    <h1>¿Te interesa conocer datos sobre la puntuación de estos filmes?</h1>
    <ul>
    <li>🥇🥈🥉 La puntuación promedio es de ${averageScore} puntos.</li>
    <li>🎬⭐ La puntuación mínima corresponde a ${minScore} puntos.</li>
    <li>🎬⭐⭐⭐⭐⭐ La puntuación máxima es de ${máxScore} puntos.</li>
    </ul>
    <button id="goBack">Regresar</button>
    `
    }

    function hideFunFacts() {
        movieFacts.style = "display: none";
        fullRoot.style = "display: flex";
    }
    
    document.getElementById("funFacts").addEventListener("click", showFunFacts);
    document.getElementById("goBack").addEventListener("click", hideFunFacts);