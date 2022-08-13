import { orderBy, filterByDirector, filterByReleaseYear } from './data.js';
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

const wipeCards = () => document.getElementById("root").innerHTML = "";

let releaseYearMenu = document.getElementById("movieyears");
let directorMenu = document.getElementById("filmdirector");

function applyBothFilters(){
    if (releaseYearMenu.value == "80s" && directorMenu.value == "Hayao Miyazaki"){
        return console.log("ay");
    } else if (releaseYearMenu.value != "80s" && directorMenu.value == "Hayao Miyazaki") {
        return console.log("mi piernita :(");
    } else {
        return console.log("ya basta de estupideces");
    }
}

releaseYearMenu.addEventListener("change", function () {
    wipeCards();  //Reasignando el arreglo inicial para que contenga los datos fitrados.
    let filterDataYear = filterByReleaseYear(releaseYearMenu.value)
    return applyBothFilters(showCards(filterDataYear));
});

directorMenu.addEventListener("change", function () {
    wipeCards();
    let filterDataDirector = filterByDirector(directorMenu.value)
    return applyBothFilters(showCards(filterDataDirector));
});

let sortByMenu = document.getElementById("sortingMenu");
sortByMenu.addEventListener("change", function () {
    wipeCards();
    return showCards(orderBy(sortByMenu.value))
});

let resetButton = document.getElementById("resetfilters");
resetButton.addEventListener("click", () => {
    wipeCards();
    releaseYearMenu.selectedIndex = 0; // .selectedIndex corresponde al valor que se le otorga a un <option>
    directorMenu.selectedIndex = 0;
    showCards(allGhibliFilms)
});