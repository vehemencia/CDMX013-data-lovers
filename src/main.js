import { recentMovies, moviesFromNineties, moviesFromEighties, orderByLetterA, orderByLetterZ, filterByDirector } from './data.js';
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
        return showCards(filterByreleaseDate(yearSelection.value));
    }
    if (yearSelection.value == "90s") {
        cleanCards();
        return showCards(moviesFromNineties);
    }
    if (yearSelection.value == "00s") {
        cleanCards();
        return showCards(recentMovies);
    }
});

/*let filmByDirector = document.getElementById("filmdirector");
filmByDirector.addEventListener("change", function () {
    cleanCards();
    const moviesByDirector = obtainingFilms.filter(function filterDirector(movies) {
        if (movies.director == "Hayao Miyazaki" && filmByDirector.value == "Hayao" || movies.director == "Isao Takahata" && filmByDirector.value == "Isao" || movies.director == "Yoshifumi Kondō" && filmByDirector.value == "Yoshifumi" || movies.director == "Gorō Miyazaki" && filmByDirector.value == "Goro" || movies.director == "Hiromasa Yonebayashi" && filmByDirector.value == "Hiromasa")
            return movies.director;
    })
    showCards(moviesByDirector);
})*/


let filmByDirector = document.getElementById("filmdirector");
filmByDirector.addEventListener("change", function () {
    if (filmByDirector.value == "Hayao") {
        cleanCards();
        return showCards(filterByDirector("Hayao Miyazaki"));
    }
    if (filmByDirector.value == "Isao") {
        cleanCards();
        return showCards(filterByDirector("Isao Takahata"));
    }
    if (filmByDirector.value == "Yoshifumi") {
        cleanCards()
        return showCards(filterByDirector("Yoshifumi Kondō"))
    }
    if (filmByDirector.value == "Goro") {
        cleanCards()
        return showCards(filterByDirector("Gorō Miyazaki"));
    }
    if (filmByDirector.value == "Hiromasa") {
        cleanCards()
        return showCards(filterByDirector("Hiromasa Yonebayashi"));
    }
});

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