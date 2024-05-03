// Claus
const keys = {
    api_key: '28096a863dd408271cceaf0b3d15e662',
    session_id: '942f38034c894c412f8d01e0f9b2364480fefb39',
    account_id: '21219530',
    bearer_id: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODA5NmE4NjNkZDQwODI3MWNjZWFmMGIzZDE1ZTY2MiIsInN1YiI6IjY2MjAwYmE2ZWNhZWY1MDE2M2Y5YWE4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gi6KNBH7itADdg2UX7mHWfEPtTzX_5-9Dx37fm-TIzg'
}

let moviesResult = document.getElementById("moviesResult");


function setFav(id, favBool) {
    moviesResult.innerHTML = "";

    showFavs();
}

function showFavs() {
    fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies`, {
        headers: {
            Authorization: `Bearer ${keys.bearer_id}`
        }
    })
        .then(response => response.json())
        .then(data => {
            let moviesResult = document.getElementById("moviesResult");
            moviesResult.innerHTML = "";
            console.log(data);
            data.results.forEach(movie => {
                printMovie(movie, true, false);
            });
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

function searchMovies(query) {
    clearInput();
    removeActive();
}



/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function () {
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function () {
    removeActive();
    this.classList.add("active");

    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", () => searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', () => clearInput());

function clearInput() {
    document.getElementById("search").value = "";
}

// Elimina l'atribut active del menú
function removeActive() {
    document.querySelectorAll(".menu li a").forEach(el => el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch) {

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

