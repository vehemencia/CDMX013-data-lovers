import { peliculasDosmiles, peliculasNoventas, peliculasOchentas, orderByLetterA, orderByLetterZ } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

// Obteniendo el arreglo con 20 elementos
const obtainingFilms = ghibli.films;

// Aquí con .map() logramos llamar cada elemento (la -propiedad-) dentro del arreglo
function showCards(films) {
    return films.map(obj => {
        document.getElementById("root").innerHTML +=
            `
            <div class="card">
            <h1>${obj.title}</h1>
            <img class="cardPoster" src="${obj.poster}"/>
            <p>Año: ${obj.release_date}</p>
            <p>Director: ${obj.director}</p>
            <p>Puntuación: ${obj.rt_score}</p>
            <button class="moreInfoButton">Conoce más</button>
            </div>
            `
    });
}
let prueba = showCards(obtainingFilms);

const cleanCards = () => document.getElementById("root").innerHTML = "";

let yearSelection = document.getElementById("movieyears");
yearSelection.addEventListener("change", function () {
    if (yearSelection.value == "80s") {
        cleanCards();
        return showCards(peliculasOchentas);
    }
    if (yearSelection.value == "90s") {
        cleanCards();
        return showCards(peliculasNoventas);
    }
    if (yearSelection.value == "00s") {
        cleanCards();
        return showCards(peliculasDosmiles);
    }
});

let filmByDirector = document.getElementById("filmdirector");
filmByDirector.addEventListener("change", function () {
    cleanCards();
    const moviesByDirector = obtainingFilms.filter(function filterDirector(movies) {
        if (movies.director == "Hayao Miyazaki" && filmByDirector.value == "Hayao" || movies.director == "Isao Takahata" && filmByDirector.value == "Isao" || movies.director == "Yoshifumi Kondō" && filmByDirector.value == "Yoshifumi" || movies.director == "Gorō Miyazaki" && filmByDirector.value == "Goro" || movies.director == "Hiromasa Yonebayashi" && filmByDirector.value == "Hiromasa")
            return movies.director;
    })
    showCards(moviesByDirector);
})

let dropDownMenu = document.getElementById("sortingMenu");
dropDownMenu.addEventListener("change", function () {
    if (dropDownMenu.value === "AZ") {
        cleanCards();
        let filmsFromAtoZ = obtainingFilms.sort(orderByLetterA);
        console.log(obtainingFilms);
        return showCards(filmsFromAtoZ);
    }
    if (dropDownMenu.value === "ZA") {
        cleanCards();
        let filmsFromZtoA = obtainingFilms.sort(orderByLetterZ);
        console.log(obtainingFilms)
        return showCards(filmsFromZtoA);
    }
});