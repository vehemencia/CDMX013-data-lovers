import { orderBy, globalFilter} from './data.js';
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


//Ordenamiento AZ, ZA
let dropDownMenu = document.getElementById("sortingMenu");
dropDownMenu.addEventListener("change", function () {
cleanCards();
return showCards(globalFilter(yearSelection.value,directionSelection.value, dropDownMenu.value))
});

//Filtros por año
let yearSelection = document.getElementById("movieyears");
yearSelection.addEventListener("change", function(){
    cleanCards();
    showCards(globalFilter(yearSelection.value,directionSelection.value, dropDownMenu.value))
});

//Filtros por director
let directionSelection = document.getElementById("filmdirector");
directionSelection.addEventListener("change", function(){
    cleanCards();
    showCards(globalFilter(yearSelection.value,directionSelection.value, dropDownMenu.value))
});



let resetButton =document.getElementById("resetfilters");
resetButton.addEventListener("click", () => {
    cleanCards();
    yearSelection.selectedIndex = 0; // .selectedIndex corresponde al valor que se le otorga a un <option>
    directionSelection.selectedIndex = 0;
    showCards(obtainingFilms)
});

