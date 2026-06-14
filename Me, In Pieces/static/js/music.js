const searchMusic = async () => {

  const res = await fetch(
    "https://itunes.apple.com/search?term=pop&entity=song&limit=20"
  );

  const data = await res.json();

  const songs = data.results
    .filter(song =>
      song.trackName &&
      song.artistName &&
      song.previewUrl
    )
    .slice(0, 8);

  const musicContainer =
    document.querySelector("#music");

  musicContainer.innerHTML = songs
    .map((song, index) => `
      <div class="fav-card music-card" data-id="${index}">

        <img
          src="${song.artworkUrl100.replace("100x100","600x600")}"
          alt="${song.trackName}"
        >

        <h3>${song.trackName}</h3>

        <p>${song.artistName}</p>

      </div>
    `)
    .join("");

  const cards =
    document.querySelectorAll(".music-card");

  cards.forEach(card => {

    card.addEventListener("click", () => {

      const id = card.dataset.id;

      showSong(songs[id]);

    });

  });

};

function showSong(song) {

  const detail =
    document.querySelector("#music-detail");

  detail.innerHTML = `
    <div class="music-player">

      <button
        class="close-player"
        onclick="closePlayer()">
        ✕
      </button>

      <img
        src="${song.artworkUrl100.replace("100x100","600x600")}"
        alt="${song.trackName}"
      >

      <h2>${song.trackName}</h2>

      <p>${song.artistName}</p>

      <audio controls autoplay>
        <source
          src="${song.previewUrl}"
          type="audio/mpeg"
        >
      </audio>

    </div>
  `;

  detail.scrollIntoView({
    behavior: "smooth"
  });

}

function closePlayer() {

  document.querySelector("#music-detail")
    .innerHTML = "";

}

searchMusic();