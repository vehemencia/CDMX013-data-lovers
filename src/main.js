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

console.log(obtainingFilms)

let arrayFemale = [];
let arrayMale = [];
let arrayOtros = [];
let arrayScoreMovies= [];

let accessPeople = obtainingFilms.map(x => {
    x.people.map(y=>{
        if(y.gender == "Female"){
            arrayFemale.push(y.gender)
        } else if(y.gender == "Male"){
            arrayMale.push(y.gender)
        }else{
            arrayOtros.push(y.gender)
        }
    })
    let scoreNumbers = (Number(x.rt_score))
    arrayScoreMovies.push(scoreNumbers); 
    
    })

console.log(accessPeople);
console.log("Número de mujeres: " + arrayFemale.length);
console.log("Número de hombres: " + arrayMale.length);
console.log("Otros géneros: " + arrayOtros.length)
console.log(arrayScoreMovies)
console.log(arrayScoreMovies.length)

//let x = sum.reduce((a,b) => a+b)
//console.log(x);

let sum = arrayScoreMovies.reduce((a,b) => (a + b))
let averageScore = sum/arrayScoreMovies.length
let minScore = arrayScoreMovies.reduce((a,b) => Math.min(a, b))
let máxScore = arrayScoreMovies.reduce((a,b) => Math.max(a, b))
console.log("El score promedio de las películas es de " + averageScore)
console.log("La puntuacion mínima es " + minScore)
console.log("La puntuacion máxima es " + máxScore)


/* let accessPeople = obtainingFilms.map(x => {
    x.people.map(y => {
        y.gender
        if(y.gender == "Female"){
        for(let i=0; i<= x.people.length; i++){
            console.log(i)
        }
    }
    })
})
console.log(obtainingFilms) */

/* let accesP = obtainingFilms.map(function(x){
    return x.people
    
})
console.log(accesP) */

/* 
function getGender(x){
    if(x.gender == "Female"){
        return ":)"
    }
}
 */
