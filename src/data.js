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
  }
  //moviedirector = no hay filtro
  if(director != "moviedirector"){
     filteredMovies = filteredMovies.filter(a => a.director == director)
  }
  //se retorna las películas filtradas por año y director.
  return filteredMovies;
}

//Funciones de ordenamiento
export function orderByLetterA(a, b) {
  if (a.title < b.title) {
    return -1;
  }
}


export function orderByLetterZ(a, b) {
  if (a.title > b.title) {
    return -1;
  }
}

export function orderBy(orderMethod){
if(orderMethod == "AZ"){
  return obtainingFilms.sort(orderByLetterA)
}else if(orderMethod == "ZA"){
  return obtainingFilms.sort(orderByLetterZ)
}
}



