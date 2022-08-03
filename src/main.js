import { example, anotherExample } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

//document.getElementById("tittle").innerText = "La producccion es" + movies.studio;
//let prueba = document.getElementById("root").innerText
//console.log(example, anotherExample)

//Obteniendo el arreglo con 20 elementos
let films = ghibli.films;
// console.log(films);

// Obteniendo los títulos del objeto films en un arreglo de 20 elementos
// let titulo = films.map(obj => {
//     return obj.title;
// })
// console.log(titulo)

// Obteniendo las imágenes del objeto films en un arreglo de 20 elementos
// let imagen = films.map(obj => {
//     return obj.poster;
// })
// console.log(imagen)

//AQUI CON MAP, LOGRAMOS LLAMAR CADA ELEMENTO 
let filmsGhibli = films.map(obj => {
    document.getElementById("root").innerHTML +=
        `
        <div class="card">
        <h1> ${obj.title} </h1>
        <img class="cardPoster" src="${obj.poster}"/>
        <button class="botonn">Descubre más</button>
        
        </div>
        `
})

// let botones = document.getElementsByClassName("botonn");
// let aaa = document.getElementsByClassName("infoCard");
// for (let cont = 0; cont < aaa.length; cont++) {
//     aaa[cont]
// }
// console.log(aaa);

// //for (let uwu = 0; uwu < sinopsis.length; uwu++) {
//     //console.log(sinopsis);
// //}



//     for (let i = 0; i < botones.length; i++) {
//         botones[i].onclick = function () {
//             aaa.style = "display: none";
//         }
//     }

