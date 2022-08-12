import { orderBy, filterByDirector, filterByreleaseDate} from './data.js';
import ghibli from './data/ghibli/ghibli.js';

// Obteniendo el arreglo con 20 elementos
export const obtainingFilms = ghibli.films;
//export const moviesGhibli = ghibli.films


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
    cleanCards();
    //Reasignando el arreglo inicial para que contenga los datos fitrados.
    let filterDataYear = filterByreleaseDate(yearSelection.value)
    return showCards(filterDataYear);
});


let directionSelection = document.getElementById("filmdirector");
directionSelection.addEventListener("change", function () {
    cleanCards();
    //Reasignando el arreglo inicial para que contenga los datos fitrados.
    //obtainingFilms = filterByDirector(directionSelection.value)
    let filterDataDirector = filterByDirector(directionSelection.value)
    return showCards(filterDataDirector);
});


let dropDownMenu = document.getElementById("sortingMenu");
dropDownMenu.addEventListener("change", function () {
cleanCards();
return showCards(orderBy(dropDownMenu.value))
});

let resetButton =document.getElementById("resetfilters");
resetButton.addEventListener("click", () => {
    cleanCards();
    yearSelection.selectedIndex = 0; // .selectedIndex corresponde al valor que se le otorga a un <option>
    directorSelection.selectedIndex = 0;
    showCards(obtainingFilms)
});