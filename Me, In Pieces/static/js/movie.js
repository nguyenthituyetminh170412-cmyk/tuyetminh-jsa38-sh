const API_KEY = "ed1ee42e9d48e1fcb97f3406d2401348";

async function loadMovies() {

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  const data = await res.json();

  const movies = data.results.slice(0, 8);

  const movieContainer =
    document.querySelector("#movies");

  movieContainer.innerHTML = movies
    .map((movie, index) => `
      <div class="fav-card movie-card" data-id="${index}">

        <img
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          alt="${movie.title}"
        >

        <h3>${movie.title}</h3>

        <p>
          ⭐ ${(movie.vote_average / 2).toFixed(1)}
        </p>

      </div>
    `)
    .join("");

  const cards =
    document.querySelectorAll(".movie-card");

  cards.forEach(card => {

    card.addEventListener("click", () => {

      const id = card.dataset.id;

      showMovie(movies[id]);

    });

  });

}

async function showMovie(movie) {

  const detail =
    document.querySelector("#movie-detail");

  // Lấy trailer
  const videoRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
  );

  const videoData = await videoRes.json();

  const trailer = videoData.results.find(
    video =>
      video.site === "YouTube" &&
      video.type === "Trailer"
  );

  // Lấy đạo diễn
  const creditRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`
  );

  const creditData = await creditRes.json();

  const director =
    creditData.crew.find(
      person => person.job === "Director"
    );

  detail.innerHTML = `
    <div class="movie-player">

      <button
        class="close-player"
        onclick="closeMovie()">
        ✕
      </button>

      <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        alt="${movie.title}"
      >

      <h2>${movie.title}</h2>

      <p class="movie-director">
        🎬 Director:
        ${director ? director.name : "Unknown"}
      </p>

      <p class="movie-rating">
        ⭐ ${(movie.vote_average / 2).toFixed(1)}
      </p>

      <p class="movie-overview">
        ${movie.overview}
      </p>

      ${
        trailer
          ? `
            <h3 class="trailer-title">
              🎥 Trailer
            </h3>

            <div class="trailer-container">
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/${trailer.key}"
                title="Movie Trailer"
                frameborder="0"
                allowfullscreen>
              </iframe>
            </div>
          `
          : `
            <p>
              Trailer not available.
            </p>
          `
      }

    </div>
  `;

  detail.scrollIntoView({
    behavior: "smooth"
  });

}

function closeMovie() {

  document.querySelector("#movie-detail")
    .innerHTML = "";

}

loadMovies();