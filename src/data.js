import ghibli from './data/ghibli/ghibli.js';
//import {obtainingFilms} from './main.js'
// estas funciones son de ejemplo
// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
let obtainingFilms2 = ghibli.films;

export const peliculasOchentas = obtainingFilms2.filter(a => a.release_date <= "1989");
export const peliculasNoventas = obtainingFilms2.filter(a => a.release_date <= "1999" && a.release_date >= "1990");
export const peliculasDosmiles = obtainingFilms2.filter(a => a.release_date >= "2000");


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