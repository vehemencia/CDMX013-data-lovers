import { example, anotherExample } from './data.js';
// import data from './data/lol/lol.js';
import ghibli from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//document.getElementById("tittle").innerText = "La producccion es" + movies.studio;
let prueba = document.getElementById("root").innerText
console.log(example, anotherExample)

//Obteniendo el arreglo con 20 elementos
let films = ghibli.films;
console.log(films);

//Obteniendo los títulos del objeto films en un arreglo de 20 elementos
let titulo = films.map(obj => {
    return obj.title;
})
console.log(titulo)

for(let i=0; i<= titulo.length-1; i++){
    document.getElementById("root").innerText = (titulo)
}



//Obteniendo por separada cada elemento del arreglo.
titulo.forEach(element => {
    console.log(element)
})
console.log(titulo.length)


//Obteniendo los títulos del objeto films
/* let director = films.map(obj => {
    return obj.director;
})

console.log(titulo) //Nos devuelve los títulos en un array
console.log(director) */
//console.log(tittle[1])