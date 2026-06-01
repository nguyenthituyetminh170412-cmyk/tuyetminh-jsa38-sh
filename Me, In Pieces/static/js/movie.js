const API_KEY = "ed1ee42e9d48e1fcb97f3406d2401348";

async function loadMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  const data = await res.json();

    document.querySelector("#movies").innerHTML =
    data.results.slice(0,8).map(movie => `
        <div class="fav-card"
            onclick="window.open('https://www.themoviedb.org/movie/${movie.id}','_blank')">
            <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
            <h3>${movie.title}</h3>
        </div>
    `).join("");
}

loadMovies();