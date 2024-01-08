const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const randomButton = document.getElementById("random");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const startDuration = document.querySelector(".start");
const barsButton = document.querySelector(".player__btn.player__btn--small");
const songList = document.querySelector(".song-list");

const songs = [
    {
        title: "Ivory",
        artist: "Banda sonora de Berserk - Gatsu",
        source: "song/gutstheme.mp3",
        albumImage: "img/desktop-wallpaper-guts-jaw-art.jpg",
    },
    {
        title: "Ivory",
        artist: "Banda sonora de Berserk - Behelit",
        source: "song/Behelit (128 kbps).mp3",
        albumImage: "img/desktop-wallpaper-guts-jaw-art.jpg",
    },
    {
        title: "Ivory",
        artist: "Banda sonora de Berserk - So Long",
        source: "song/Waiting So Long ).mp3",
        albumImage: "img/desktop-wallpaper-guts-jaw-art.jpg",
    },
    {
        title: "Ivory",
        artist: "Banda sonora de Berserk - Fear",
        source: "song/fear.mp3",
        albumImage: "img/desktop-wallpaper-guts-jaw-art.jpg",
    }
];

let currentSongIndex = 0;
let isRandom = false;

function loadSong(index) {
    const song = songs[index];
    const playerTitle = document.querySelector(".player__title");
    const playerArtist = document.querySelector(".player__artist");
    const playerSong = document.querySelector(".player__song");
    const playerImg = document.querySelector(".player__img");

    playerTitle.textContent = "playing now";
    playerArtist.textContent = song.artist;
    playerSong.textContent = song.title;
    playerImg.src = song.albumImage;
    audio.src = song.source;
}

loadSong(currentSongIndex);

playPause.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
        const pauseBtn = playPause.querySelector(".pause-btn");
        const playBtn = playPause.querySelector(".play-btn");

        pauseBtn.classList.remove("hide");
        playBtn.classList.add("hide");
        
        audio.play()
            .then(() => {})
            .catch((error) => {
                console.error("Error al reproducir el audio: ", error);
            });
    } else {
        audio.pause();
        playPause.querySelector(".pause-btn").classList.add("hide");
        playPause.querySelector(".play-btn").classList.remove("hide");
    }
});

randomButton.addEventListener("click", () => {
    isRandom = !isRandom;
    const randomColor = isRandom ? "#5c87fe" : "transparent";
    randomButton.style.backgroundColor = randomColor;
    randomButton.style.color = isRandom ? "#fff" : "#a1a1a1";

    if (isRandom) {
        const newSongIndex = getRandomSongIndex();
        loadSong(newSongIndex);
        audio.play();
    }
});


nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
});

previousButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
});

audio.addEventListener("ended", () => {
    if (isRandom) {
        const newSongIndex = getRandomSongIndex();
        loadSong(newSongIndex);
        audio.play();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
    }
});

function getRandomSongIndex() {
    let newIndex = currentSongIndex;
    while (newIndex === currentSongIndex) {
        newIndex = Math.floor(Math.random() * songs.length);
    }
    return newIndex;
}

audio.addEventListener("loadedmetadata", () => {
    startDuration.textContent = formatTime(0);
});

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    startDuration.textContent = formatTime(currentTime);
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

barsButton.addEventListener("click", () => {
    songList.style.display = songList.style.display === "none" ? "block" : "none";
});


const loopButton = document.getElementById("loop");
let isLooping = false;

loopButton.addEventListener("click", () => {
    isLooping = !isLooping;
    const loopColor = isLooping ? "#5c87fe" : "transparent";
    loopButton.style.backgroundColor = loopColor;
    loopButton.style.color = isLooping ? "#fff" : "#a1a1a1";
    
    audio.loop = isLooping;
});
