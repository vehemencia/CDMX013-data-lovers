import ghibli from './data/ghibli/ghibli.js';

const obtainingFilms2 = ghibli.films;

export function filterByReleaseDate(year) {
    if (year == "80s") {
        return obtainingFilms2.filter(a => a.release_date <= "1989");
    } else if (year == "90s") {
        return obtainingFilms2.filter(a => a.release_date <= "1999" && a.release_date >= "1990");
    } else if (year == "00s") {
        return obtainingFilms2.filter(a => a.release_date >= "2000");
    }
}

export function filterByDirector(director) {
    return obtainingFilms2.filter(a => a.director == director);
}

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

export function sortingFilms(order){
    if (order == "AZ") {
        return obtainingFilms2.sort(orderByLetterA);
    } else if (order == "ZA") {
        return obtainingFilms2.sort(orderByLetterZ);
    } else {
        return obtainingFilms2;
    }
}