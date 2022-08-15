import ghibli from './data/ghibli/ghibli.js';
import {obtainingFilms} from './main.js';

export function filterByreleaseDate(year) {
  if (year == "80s") {
    let ochentasFiltroUno =  obtainingFilms.filter(a => a.release_date <= "1989")
    return ochentasFiltroUno
  } else if (year == "90s") {
    let noventasFiltroDos = obtainingFilms.filter(a => a.release_date <= "1999" && a.release_date >= "1990")
    return noventasFiltroDos
  }else if (year == "00s") {
    let dosmilesFiltroTres = obtainingFilms.filter(a => a.release_date >= "2000")
    return dosmilesFiltroTres
  }
}

//Función para los dos filtros y ordenamientos.
export function globalFilter(year,director, order){
  //se obtiene el arreglo de movies, se asigna a filteredMovies. 
  //En caso de que ningun filtro aplique, se retornan todas las películas.
  let filteredMovies = obtainingFilms;
  //releaseyear = opción inicial: no hay filtro aplicado en los filtros por año.
  if(year != "releaseyear"){
    //si hay un filtro en año aplica:
    if (year == "80s") {
      filteredMovies =  obtainingFilms.filter(a => a.release_date <= "1989")
    } else if (year == "90s") {
      filteredMovies = obtainingFilms.filter(a => a.release_date <= "1999" && a.release_date >= "1990")
    }else if (year == "00s") {
      filteredMovies = obtainingFilms.filter(a => a.release_date >= "2000")
    }
    console.log(filteredMovies)
  }
  //moviedirector = no hay filtro
  if(director != "moviedirector"){
     filteredMovies = filteredMovies.filter(a => a.director == director)
     console.log(filteredMovies)
  }
  //se retorna las películas filtradas por año y director.

  //Se ordenan los datos filtrados
  if(order != "notSorted"){
    if(order == "AZ"){
      filteredMovies= filteredMovies.sort(orderByLetterA)
    }else if(order == "ZA"){
      filteredMovies= filteredMovies.sort(orderByLetterZ)
    }
    else if (order == "minus") {
      filteredMovies = filteredMovies.sort(orderByScoreMinus)
  } else if (order == "plus") {
      filteredMovies = filteredMovies.sort(orderByScorePlus);
  }
  }
  console.log(filteredMovies)
  return filteredMovies;
}

//Funciones de ordenamiento
function orderByLetterA(a, b) {
  if (a.title < b.title) {
    return -1;
  }
}


function orderByLetterZ(a, b) {
  if (a.title > b.title) {
    return -1;
  }
}

//Funciones de ordenamiento por puntuacion
function orderByScoreMinus(a, b){
  return a.rt_score - b.rt_score;
} 

function orderByScorePlus(a, b){
  return b.rt_score - a.rt_score;
}

export function orderBy(orderMethod){
if(orderMethod == "AZ"){
  return obtainingFilms.sort(orderByLetterA)
}else if(orderMethod == "ZA"){
  return obtainingFilms.sort(orderByLetterZ)
}
}

//Calculos agregados

let filmsForOperations = ghibli.films
let arrayFemale = [];
let arrayMale = [];
let arrayOtros = [];
let arrayScoreMovies= [];

let accessPeople = filmsForOperations.map(x => {
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

console.log("Número de mujeres: " + arrayFemale.length);
console.log("Número de hombres: " + arrayMale.length);
console.log("Otros géneros: " + arrayOtros.length)


let sum = arrayScoreMovies.reduce((a,b) => (a + b))
let averageScore = sum/arrayScoreMovies.length
let minScore = arrayScoreMovies.reduce((a,b) => Math.min(a, b))
let máxScore = arrayScoreMovies.reduce((a,b) => Math.max(a, b))
console.log("La puntuación promedio de las películas es de " + averageScore)
console.log("La puntuacion mínima es " + minScore)
console.log("La puntuacion máxima es " + máxScore)







