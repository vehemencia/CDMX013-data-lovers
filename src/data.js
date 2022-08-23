import ghibli from './data/ghibli/ghibli.js';
export const arrayWithMovies = ghibli.films;

//Función para los dos filtros y ordenamientos.
export function globalFilter(year, director, order, array) {
    // Se obtiene el arreglo desde array, se asigna a filteredMovies. En caso de que ningun filtro aplique, se retornan todas las películas.
    let filteredMovies = array;
    // console.log(filteredMovies)
    //releaseyear = opción inicial: no hay filtro aplicado en los filtros por año.
    if (year != "releaseyear") {
        // Si hay un filtro en año aplica, puesto que es distinto a "releaseyear":
        if (year == "80s") {
            filteredMovies = array.filter(a => a.release_date <= "1989");
        } else if (year == "90s") {
            filteredMovies = array.filter(a => a.release_date <= "1999" && a.release_date >= "1990");
        } else if (year == "00s") {
            filteredMovies = array.filter(a => a.release_date >= "2000" && a.release_date <= "2009");
        } else if (year == "10s") {
            filteredMovies = array.filter(a => a.release_date >= "2010");
        }
        console.log(filteredMovies)
    }
    // Si es "moviedirector", significa que no hay filtro.
    if (director != "moviedirector") {
        filteredMovies = filteredMovies.filter(a => a.director == director);
        console.log(filteredMovies);
    }
    // Acá se ordenan los datos filtrados.
    if (order != "notSorted") {
        if (order == "AZ") {
            filteredMovies = filteredMovies.sort(orderByLetterA)
        } else if (order == "ZA") {
            filteredMovies = filteredMovies.sort(orderByLetterZ)
        } else if (order == "minus") {
            filteredMovies = filteredMovies.sort(orderByScoreMinus)
        } else if (order == "plus") {
            filteredMovies = filteredMovies.sort(orderByScorePlus);
        }
    }
    console.log(filteredMovies);
    // Aquí retorna las películas filtradas por año y director. Igual si se le aplicó sort.
    return filteredMovies;
}


// Funciones de ordenamiento alfabético.
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

// Funciones de ordenamiento por puntuación.
export function orderByScoreMinus(a, b) {
    return a.rt_score - b.rt_score;
}

export function orderByScorePlus(a, b) {
    return b.rt_score - a.rt_score;
}

// Cálculos agregados

let filmCalculations = ghibli.films;
export let arrayFemale = [];
export let arrayMale = [];
export let arrayOtherGenders = [];
export let arrayScoreMovies = [];

let accessPeople = filmCalculations.map(x => {
    x.people.map(y => {
        if (y.gender == "Female") {
            arrayFemale.push(y.gender);
        } else if (y.gender == "Male") {
            arrayMale.push(y.gender);
        } else {
            arrayOtherGenders.push(y.gender);
        }
    })
    let scoreNumbers = (Number(x.rt_score))
    arrayScoreMovies.push(scoreNumbers);

})

console.log("Número de mujeres: " + arrayFemale.length);
console.log("Número de hombres: " + arrayMale.length);
console.log("Otros géneros: " + arrayOtherGenders.length)

let sum = arrayScoreMovies.reduce((a, b) => (a + b));
export let averageScore = sum / arrayScoreMovies.length;
export let minScore = arrayScoreMovies.reduce((a, b) => Math.min(a, b));
export let máxScore = arrayScoreMovies.reduce((a, b) => Math.max(a, b));

accessPeople;
