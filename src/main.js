import { example, anotherExample } from './data.js';
// import data from './data/lol/lol.js';
import ghibli from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//document.getElementById("tittle").innerText = "La producccion es" + movies.studio;
//let prueba = document.getElementById("root").innerText
console.log(example, anotherExample)

//Obteniendo el arreglo con 20 elementos
let films = ghibli.films;
console.log(films);



//Obteniendo los títulos del objeto films en un arreglo de 20 elementos
let titulo = films.map(obj => {
    return obj.title;
})
console.log(titulo)

//Obteniendo las imágenes del objeto films en un arreglo de 20 elementos
let imagen = films.map(obj => {
    return obj.poster;
})
console.log(imagen)


//AQUI CON MAP, LOGRAMOS LLAMAR CADA ELEMENTO 
let filmsGhibli = films.map(obj => {
    document.getElementById("root").innerHTML += 
    `
        <div class="card">
        <h1> "${obj.title}" </h1>
        <img src="${obj.poster}"/>
        </div>
        `
}) 



//ESTO FUNCIONA, SE CONSTRUYÓ EL 01-AGO
/* for(let i=0; i<= titulo.length-1 && i<= imagen.length-1; i++){
    document.getElementById("root").innerHTML += 
    `
        <div class="card">
        <h1> "${titulo[i]}" </h1>
        <img src="${imagen[i]}"/>
        </div>
        `
        } 
        console.log(titulo[i])  */
 

//SE RECORREN LOS TÍTULOS Y SE OBTIENE
/* for(let i=0; i<= titulo.length-1; i++){
    document.getElementById("root").innerHTML += 
    `
    <div class="card">
    <h1 class="movieName">${titulo[i]}</h1>
  </div>
`
} */

/* function datosDinamicos(films){
    let container = document.getElementById("root")
    for(let i=0; i<= titulo.length-1; i++){
        container.innerHTML += `
        <div class="card">
        <h1 class="movieName">${titulo[i]}</h1>
      </div>
`
    }
    console.log(films)
} */

//document.write('<p>' + i + '</p>');

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

//Obteniendo los links de las imágenes
/* let imagen = films.map(obj => {
    return obj.poster;
})
console.log(imagen) */

/* for(let i=0; i<= imagen.length-1; i++){
    document.getElementById("filters").innerText = (imagen)
}
 */

/* for(let i=0; i<= imagen.length-1; i++){
document.getElementById("root").innerHTML += 
`
<div class="card">
<img src="${imagen[i]}"/>
</div>
`
}  */