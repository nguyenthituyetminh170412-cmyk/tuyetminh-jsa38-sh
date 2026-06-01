const searchMusic = async () => {
  const res = await fetch(
    "https://itunes.apple.com/search?term=pop&limit=8"
  );

  const data = await res.json();

    document.querySelector("#music").innerHTML =
    data.results.map(song => `
        <div class="fav-card"
            onclick="window.open('${song.previewUrl}','_blank')">
            <img src="${song.artworkUrl100.replace('100x100','600x600')}">
            <h3>${song.trackName}</h3>
            <p>${song.artistName}</p>

        </div>
    `).join("");
};

searchMusic();