import ghibli from './data/ghibli/ghibli.js';
import { allGhibliFilms } from './main.js';

export function filterByReleaseYear(year) {
    if (year == "80s") {
        let eigthiesFilms = allGhibliFilms.filter(a => a.release_date <= "1989");
        console.log(allGhibliFilms);
        console.log(eigthiesFilms);
        return eigthiesFilms;
    } else if (year == "90s") {
        let ninetiesFilms = allGhibliFilms.filter(a => a.release_date <= "1999" && a.release_date >= "1990");
        console.log(allGhibliFilms);
        console.log(ninetiesFilms);
        return ninetiesFilms;
    } else if (year == "00s") {
        let twoThousandFilms = allGhibliFilms.filter(a => a.release_date >= "2000" && a.release_date <= "2009");
        console.log(allGhibliFilms);
        console.log(twoThousandFilms);
        return twoThousandFilms;
    } else if (year == "10s") {
        let moreRecentFilms = allGhibliFilms.filter(a => a.release_date >= "2010")
        console.log(allGhibliFilms);
        console.log(moreRecentFilms);
        return moreRecentFilms;
    } else {
        console.log(allGhibliFilms)
        return allGhibliFilms
    }
}

export function filterByDirector(director) {
    if (director != "moviedirector") {
        let selectedDirector = allGhibliFilms.filter(a => a.director == director);
        console.log(allGhibliFilms);
        console.log(selectedDirector);
        return selectedDirector;
    } else {
        return allGhibliFilms;
    }

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

export function orderBy(orderMethod) {
    if (orderMethod == "AZ") {
        return allGhibliFilms.sort(orderByLetterA)
    } else if (orderMethod == "ZA") {
        return allGhibliFilms.sort(orderByLetterZ)
    }
}