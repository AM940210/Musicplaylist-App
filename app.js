let playlists = [];

function createPlayList() {
    const playlistName = document.getElementById("playlist-name").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const artist = document.getElementById("artist").value.trim();

    if (!playlistName) {
        alert("Vänligen ange ett namn för spellistan!");
        return;
    }

    const newPlaylist = {
        name: playlistName,
        genre: genre || "Ej angiven",
        artist: artist || "Ej angiven",
        songs: []
    };

    playlists.push(newPlaylist);
    renderPlaylists();

    document.getElementById("playlist-name").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("artist").value = "";
}

function addSongToPlaylist(index) {
    const songInput = document.getElementById(`song-input-${index}`);
    const songName = songInput.value.trim();

    if (!songName) {
        alert("Vänligen ange en låt eller YouTube-länk.");
        return;
    }

    playlists[index].songs.push(songName);
    songInput.value = "";
    renderPlaylists();
}

function deleteSongFromPlaylist(playlistIndex, songIndex) {
    playlists[playlistIndex].songs.splice(songIndex, 1);
    renderPlaylists();
}

function extractYouTubeID(url) {
    const regExp = /^.*(?:youtu.be\/|shorts\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]{11}).*/;
    const match = url.match(regExp);
    return (match && match[1]) ? match[1] : null;
}

function renderPlaylists() {
    const container = document.getElementById("playlist-container");
    container.innerHTML = "<h2>Spellistor</h2>";

    playlists.forEach((playlist, index) => {
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");

        const songsHTML = playlist.songs.length > 0
            ? playlist.songs.map((song, songIndex) => {
                const videoId = extractYouTubeID(song);
                return `
                    <li>
                        ${videoId
                            ? `<iframe width="250" height="140" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`
                            : song}
                        <button onclick="deleteSongFromPlaylist(${index}, ${songIndex})">❌</button>
                    </li>
                `;
            }).join("")
            : "<li>Inga låtar</li>";

        playlistDiv.innerHTML = `
            <h3>${playlist.name}</h3>
            <p><strong>Genre:</strong> ${playlist.genre}</p>
            <p><strong>Artist:</strong> ${playlist.artist}</p>
            <div>
                <strong>Låtar:</strong>
                <ul>${songsHTML}</ul>
            </div>
            <div>
                <input type="text" id="song-input-${index}" placeholder="Lägg till YouTube-länk eller låtnamn" />
                <button onclick="addSongToPlaylist(${index})">Lägg till låt</button>
            </div>
        `;

        container.appendChild(playlistDiv);
    });
}
