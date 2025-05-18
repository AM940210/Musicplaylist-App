// let playlists = [];

// function createPlayList() {
//     const name = document.getElementById("playlist-name").value.trim();
//     const genre = document.getElementById("genre").value.trim();
//     const artist = document.getElementById("artist").value.trim();
//     const songsInput = document.getElementById('songs').value.trim();
//     const playlistContainer = document.getElementById('playlist-container');

//     if (!name || !genre || !artist || !songsInput) {
//         alert("Fyll i alla fält.");
//         return;
//     }

//     const songs = songsInput.split(',').map(song => song.trim()).filter(song => song !== '');

//     const playlistDiv = document.createElement('div');
//     playlistDiv.classList.add('playlist');

//     const title = document.createElement('h3');
//     title.textContent = `🎵 ${name}`;

//     const genreEl = document.createElement('p');
//     genreEl.textContent = `Genre: ${genre}`;

//     const artistEl = document.createElement('p');
//     artistEl.textContent = `Artist: ${artist}`;


//     const songList = document.createElement('ul'); 
//     songs.forEach(song => {
//         const li = document.createElement('li');
//         li.textContent = song;
//         songList.appendChild(li);
//     });

//     playlistDiv.appendChild(title);
//     playlistDiv.appendChild(genreEl);
//     playlistDiv.appendChild(artistEl);
//     playlistDiv.appendChild(document.createTextNode("Låter"));
//     playlistDiv.appendChild(songList);

//     playlistContainer.appendChild(playlistDiv);

//     // Rensa inputfälten
//     document.getElementById('playlist-name').value = '';
//     document.getElementById('genre').value = '';
//     document.getElementById('artist').value = '';
//     document.getElementById('songs').value = '';

//     const newPlaylist = {
//         name,
//         genre,
//         artist,
//         songs
//     };

//     playlists.push(newPlaylist);
//     localStorage.setItem("playlists", JSON.stringify(playlists));
// }



// function displayPlaylist(playlist) {
//     const playlistContainer = document.getElementById('playlist-container');

//     const playlistDiv = document.createElement('div')
//     playlistDiv.classList.add('playlist');

//     const title = document.createElement('h3');
//     title.textContent = `🎵 ${playlist.name}`;

//     const genreEl = document.createElement('p');
//     genreEl.textContent = `Artist: ${playlist.genre}`;

//     const artistEl = document.createElement('p');
//     artistEl.textContent = `Artist: ${playlist.artist}`;

//     const songList = document.createElement('ul');
//     playlist.songs.forEach((song, songIndex) => {
//         const li = document.createElement('li');
//         li.textContent = song;

//         const deleteSongBtn = document.createElement('button');
//         deleteSongBtn.textContent = '❌';
//         deleteSongBtn.onclick = () => {
//             deleteSongBtn(indexedDB, songIndex);
//         };

//         li.appendChild(deleteSongBtn);
//         songList.appendChild(li);
//     });

//     const deletePlaylistBtn = document.createElement('button');
//     deletePlaylistBtn.textContent = '🗑 Ta bort spellista';
//     deletePlaylistBtn.onclick = () => {
//         deletePlaylistBtn(index);
//     };

//     playlistDiv.appendChild(title);
//     playlistDiv.appendChild(genreEl);
//     playlistDiv.appendChild(artistEl);
//     playlistDiv.appendChild(document.createTextNode("Låtar"));
//     playlistDiv.appendChild(songList);
//     playlistDiv.appendChild(deletePlaylistBtn);

//     playlistContainer.appendChild(playlistDiv);
// }

// function deletePlaylist(index) {
//     playlists.splice(index, 1);
//     localStorage.setItem("playlists", JSON.stringify(playlists));
//     renderAllPlaylists();
// }

// function deleteSong(playlistIndex, songIndex) {
//     playlists[playlistIndex].songs.splice(songIndex, 1);
//     localStorage.setItem("playlists", JSON.stringify(playlist));
//     renderAllPlaylists();
// }

// window.addEventListener("DOMContentLoaded", () => {
//     const stored = localStorage.getItem("playlists");
//     if (stored) {
//         playlists = JSON.parse(stored);
//     }
//     renderAllPlaylists()
// });

// function renderAllPlaylists() {
//     const container = document.getElementById('playlist-container');
//     container.innerHTML = "<h2>Spellistor</h2>";

//     playlists.forEach((playlist), index) => {
//         displayPlaylist(playlist, index)
// L    }

// }