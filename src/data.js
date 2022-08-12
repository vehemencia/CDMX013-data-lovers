import ghibli from './data/ghibli/ghibli.js';
import {obtainingFilms} from './main.js';

//let obtainingFilms2 = ghibli.films;


export function filterByreleaseDate(year) {
  if (year == "80s") {
    let ochentasFiltroUno =  obtainingFilms.filter(a => a.release_date <= "1989")
    console.log(obtainingFilms)
    return ochentasFiltroUno
  } else if (year == "90s") {
    let noventasFiltroDos = obtainingFilms.filter(a => a.release_date <= "1999" && a.release_date >= "1990")
    console.log(obtainingFilms)
    return noventasFiltroDos
  }else if (year == "00s") {
    let dosmilesFiltroTres = obtainingFilms.filter(a => a.release_date >= "2000")
    console.log(obtainingFilms)
    return dosmilesFiltroTres
  }else{
    console.log(obtainingFilms)
    return moviesGhibli
  }
}



export function filterByDirector(director) {
  let arrayDirector = obtainingFilms.filter(a => a.director == director)
  console.log(obtainingFilms)
  return arrayDirector;
  
}


/* 
export function filterByDirector(director) {
  let arrayDirector = obtainingFilms.filter(a => a.director == director)
  return arrayDirector;
  
}  */

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


