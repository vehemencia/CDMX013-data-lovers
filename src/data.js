import ghibli from './data/ghibli/ghibli.js';
// estas funciones son de ejemplo
// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

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

const movieData = ghibli.films;

export function sortDataA(data, orderBy) {
  return data.sort(orderByLetterA);
}

export function sortDataZ(data, orderBy) {
  return data.sort(orderByLetterZ);
}

// let filmsFromAtoZ = obtainingFilms.sort(orderByLetterA);
// console.log(obtainingFilms);

// let filmsFromZtoA = obtainingFilms.sort(orderByLetterZ);
//         console.log(obtainingFilms)