2-development
const music = new Audio();

const playlists = {
    pop: [
        {
            songName: "On My Way",
            artist: "Alan Walker",
            poster: "images/Alan-Walker.jpg",
            src: "audio/Alan-Walker-OnMyWay.mp3"
        }
    ],
    klassisk: [
        {
            Id: 1,
            songName: "Bano",
            artist: "Ahmad Zahir",
            poster: "images/ahmad-zahir1.jpg",
            src: "audio/Ahmad-Zahir-Bano.mp3"
        },
        {
            Id: 2,
            songName: "Ashiq shudai ay dil",
            artist: "Ahmad Zahir",
            poster: "images/ahmad-zahir2.jpg",
            src: "audio/Ahmad-Zahir-Ashiq-shudai-ay-Dil.mp3"
        }
    ]
};

const masterPlay = document.getElementById("masterPlay");
const title = document.getElementById("title");
const poster = document.getElementById("poster_master_play");
const songList = document.getElementById("menu_song_list");

// Function för att visa spellista baserat på genre
function loadPlaylist(genre) {
    const songs = playlists[genre];
    songList.innerHTML = "";

    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.className = "songItem";
        li.innerHTML = `
            <span>${index + 1}</span>
            <img src="${song.poster}" alt="">
            <h5>${song.songName}<br><div class="subtitle">${song.artist}</div></h5>
            <i class="bi playListPlay bi-play-circle-fill" data-genre="${genre}" data-index="${index}"></i>
        `;
        songList.appendChild(li);
    });

    attachPlayListeners();
}

// Function för att spela vald låt
function attachPlayListeners() {
    document.querySelectorAll(".playListPlay").forEach(btn => {
        btn.addEventListener("click", () => {
            const genre = btn.dataset.genre;
            const index = btn.dataset.index;
            const selectedSong = playlists[genre][index];

            music.src = selectedSong.src;
            music.play();

            poster.src = selectedSong.poster;
            title.innerHTML = `${selectedSong.songName}<br><div class="subtitle">${selectedSong.artist}</div>`;
            masterPlay.classList.remove("bi-play-fill");
            masterPlay.classList.add("bi-pause-fill");
        });
    });
}

// Toggle master play/pause
masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    } else {
        music.pause();
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");
    }
});

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];


pop_song_right.addEventListener("click", () =>  {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener("click", () =>  {
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];


pop_art_right.addEventListener("click", () =>  {
    item.scrollLeft += 330;
})
pop_art_left.addEventListener("click", () =>  {
    item.scrollLeft -= 330;
})

loadPlaylist("klassisk"); // Load default playlist

