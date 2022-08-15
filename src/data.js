import ghibli from './data/ghibli/ghibli.js';
import {obtainingFilms} from './main.js';

//let obtainingFilms2 = ghibli.films;



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



/* export function filterByDirector(director, arrayDirector2) {
  console.log(director)
  if(director != "moviedirector"){
    return arrayDirector2.filter(a => a.director == director)
  }
  return arrayDirector2;
} */

//Función para los dos filtros
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




