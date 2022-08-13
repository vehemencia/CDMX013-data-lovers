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

//Filtros por año
let yearSelection = document.getElementById("movieyears");
yearSelection.addEventListener("change", function(){
    cleanCards();
    showCards(globalFilter(yearSelection.value,directionSelection.value));
});

/* yearSelection.addEventListener("change", function(){
    cleanCards();
    let filterDataYear = filterByreleaseDate(yearSelection.value)
    console.log(filterDataYear)
    let filterDataDirector = filterByDirector(directionSelection.value, filterDataYear)
    console.log(filterDataDirector)
    showCards(filterDataDirector)
}); */

    //Reasignando el arreglo inicial para que contenga los datos fitrados.
/*     let filterDataYear = filterByreleaseDate(yearSelection.value)
    let selectedDirector = document.getElementById("filmdirector").value;
    console.log(selectedDirector)
    if(selectedDirector != "moviedirector"){
        filterDataYear = filterByDirector(selectedDirector)
    }
    return showCards(filterDataYear); */



//Filtros por director
let directionSelection = document.getElementById("filmdirector");
directionSelection.addEventListener("change", function(){
    cleanCards();
    showCards(globalFilter(yearSelection.value,directionSelection.value))
});
    //Reasignando el arreglo inicial para que contenga los datos fitrados.
    //obtainingFilms = filterByDirector(directionSelection.value)
/*     let filterDataDirector = filterByDirector(directionSelection.value)
    return showCards(filterDataDirector); */



/* yearSelection.onchange = function() {
    alert(this.value);
} */

/* if(yearSelection.onchange){
    console.log("seleccionaste ambos")
}

function opionsFilters(event, changes){
    if(event.onchange ==)
}
 */

/* function filterMovies(){
    cleanCards();
    showCards(globalFilter(yearSelection.value,directionSelection.value));
} */

//Ordenamiento AZ, ZA
let dropDownMenu = document.getElementById("sortingMenu");
dropDownMenu.addEventListener("change", function () {
cleanCards();
return showCards(orderBy(dropDownMenu.value))
});



let resetButton =document.getElementById("resetfilters");
resetButton.addEventListener("click", () => {
    cleanCards();
    yearSelection.selectedIndex = 0; // .selectedIndex corresponde al valor que se le otorga a un <option>
    directionSelection.selectedIndex = 0;
    showCards(obtainingFilms)
});