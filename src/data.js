import ghibli from './data/ghibli/ghibli.js';

// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
let obtainingFilms2 = ghibli.films;

export const moviesFromEighties = obtainingFilms2.filter(a => a.release_date <= "1989");
export const moviesFromNineties = obtainingFilms2.filter(a => a.release_date <= "1999" && a.release_date >= "1990");
export const recentMovies = obtainingFilms2.filter(a => a.release_date >= "2000");

export function filterByreleaseDate(year) {
    if (year == "80s") {
        return obtainingFilms2.filter(a => a.release_date <= "1989")
    }
    if (yearSelection.value == "90s") {
        cleanCards();
        return showCards(moviesFromNineties);
    }
    if (yearSelection.value == "00s") {
        cleanCards();
        return showCards(recentMovies);
    }
}


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
export function filterByDirector(director) {
    return obtainingFilms2.filter(a => a.director == director)
}