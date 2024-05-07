// Claus
const keys = {
    api_key: '28096a863dd408271cceaf0b3d15e662',
    session_id: '942f38034c894c412f8d01e0f9b2364480fefb39',
    account_id: '21219530',
    bearer_id: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODA5NmE4NjNkZDQwODI3MWNjZWFmMGIzZDE1ZTY2MiIsInN1YiI6IjY2MjAwYmE2ZWNhZWY1MDE2M2Y5YWE4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gi6KNBH7itADdg2UX7mHWfEPtTzX_5-9Dx37fm-TIzg'
}

let moviesResult = document.getElementById("moviesResult");


function setFav(id, favBool) {

    // Paràmetres que s'envien amb la petició POST al fetch
    let options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${keys.bearer_id}`
        },
        // Cos de la petició post per afegir una pel·lícula a preferits
        body: JSON.stringify({
            media_type: 'movie',
            media_id: id,
            favorite: favBool
        })
    };

    // Fetch a la url junt amb els paràmetres
    fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite`, options)
        .then(response => response.json())
        .then(console.log(id + " marked as true/false"))
        .catch(error => console.log(error));

    // Un cop s'ha fet el fetch, s'invoca la funció per mostrar els preferits actualitzats
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

            // Per cada resultat, s'invoca a la funció printMovie que imprimeix cada pel·lícula
            data.results.forEach(movie => {
                printMovie(movie, true, false);
            });
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

async function searchMovies(query, page) {
    try {
        // Funcions que netejen l'input del searchbar
        clearInput();
        removeActive();

        // Fem ús del async await per fer la petició de búsqueda
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keys.api_key}&query=${query}`);
        
        // Si la response no dóna ok, salta un error
        if (!response.ok) {
            throw new Error('Error de conexió')
        }

        // convertim les dades a json
        let data = await response.json();

        total_pages = data.total_pages;
        current_page = data.page;

        // Per cada pel·lícula, es comprova si està marcada com a preferida o no i despres s'imprimeix.
        for (const movie of data.results) {
            const isFav = await checkIfFavorite(movie.id);
            printMovie(movie, isFav, false); // false para watchlist, ya que no estamos comprobando eso aquí
        }

        // S'amaga el gif de loading
        hideLoading();

    } catch (error) {
        console.log('Error: ', error);
    }
}

// Funció que es crida a l'hora d'imprimir els resultats de la searchbar que comprova si la pel·lícula
// que s'ha d'imprimir esta marcada com a preferida o no
async function checkIfFavorite(id) {
    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}/account_states?api_key=${keys.api_key}`, {
            headers: {
                Authorization: `Bearer ${keys.bearer_id}`
            }
        });
        if (!response.ok) {
            throw new Error('Error de conexió')
        }
        const data = await response.json();
        return data.favorite;
    } catch (error) {
        console.log('Error: ', error);
        return false;
    }
}


// SCROLL INFINIT

var total_pages = 0;
var current_page = 1;
var isFetching = false;

window.addEventListener('scroll', async () => {
    if (isFetching)
        return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        isFetching = true;
        showLoading();

        current_page++;
        await searchMovies(query, current_page);
        isFetching = false;
    }
});

function showLoading() {
    document.getElementById("loading").style.display = "flex";
}

function hideLoading() {
    document.getElementById("loading").style.display = "none";

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

