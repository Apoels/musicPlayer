const track_banner = document.getElementById('thumbnail'); 
const track = document.getElementById('song'); 
const track_artist = document.querySelector('.track_artist'); 
const track_name = document.querySelector('.track_name');
const track_bar = document.getElementById('progress-bar'); 
let pPause = document.getElementById('play-pause'); 
const downArrow = document.getElementById('downArrow');
const app = document.getElementById('app');
const previous = document.querySelector('div.previous');
const track_timer = document.querySelector('.track_timer');
const library = document.getElementById('library');
const showPlayerBtn = document.querySelector('.showPlayer');
const backToApp = document.getElementById('backToApp');
const songList = document.getElementById('songList');





songIndex = 0;
tracks = ['./songs/song.mp3', './songs/song2.mp3', './songs/song3.m4a', './songs/song4.m4a', './songs/song5.m4a', './songs/song6.m4a'];
track_banners = ['./images/songBanner.jpg', './images/songBanner2.jpg', './images/songBanner3.jpg', './images/songBanner4.jpg', './images/songBanner5.jpg', './images/songBanner6.jpg']; 
track_artists = ['Şehinşah', 'Sierra Kid', 'Orkun DK', 'Ceg', 'Batuflex', 'Chase Atlantic']; 
track_names = ["Sür ya da Öl", "Living life, in the night", "Değeri Bilinmemiş Çocuk", "First Class", "Cem Yılmaz", "Swim"]; 

function listSong() {
    songList.innerHTML = track_artists[songIndex];
}

listSong();






let playing = true;
function playPause() {
    if (playing) {

        pPause.classList.add("fa-pause-circle");
        pPause.classList.remove("fa-play-circle");
        
        track.play();
        playing = false;
    } else {
        pPause.classList.add("fa-play-circle");
        pPause.classList.remove("fa-pause-circle");
        
        track.pause();
        playing = true;
    }
};

track.addEventListener('ended', function(){
    nextSong();
});

function nextSong() {
    songIndex++;
    if (songIndex > 5) {
        songIndex = 0;
    };
    track.src = tracks[songIndex];
    track_banner.src = track_banners[songIndex];
    
    track_artist.innerHTML = track_artists[songIndex];
    track_name.innerHTML = track_names[songIndex];


    playing = true;
    playPause();
};


function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 5;
    };
    track.src = tracks[songIndex];
    track_banner.src = track_banners[songIndex];

    track_artist.innerHTML = track_artists[songIndex];
    track_name.innerHTML = track_names[songIndex];

    playing = true;
    playPause();
};


function updateProgressValue() {
    track_bar.max = track.duration;
    track_bar.value = track.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(track.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(track.duration)));
    }
};


function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(updateProgressValue, 500);

function changeProgressBar() {
    track.currentTime = track_bar.value;
};

downArrow.addEventListener("click", function(){
    if (app) {
        app.classList.add('appResized');
        app.classList.remove('app');
        downArrow.style.display="none";
        previous.style.display="none";
        track_bar.style.display="none";
        track_timer.style.display="none";
        library.style.display="block";
        showPlayerBtn.style.display="block";
    }
    else {
        app.classList.remove('appResized');
        app.classList.add('app');
        downArrow.style.display="block";
        previous.style.display="block";
        track_bar.style.display="block";
        track_timer.style.display="block";
        library.style.display="none";
        showPlayerBtn.style.display="none";
    }
});


showPlayerBtn.addEventListener("click", function(){
    if (app) {
        library.style.display="none";
        app.classList.remove('appResized');
        app.classList.add('app');
        downArrow.style.display="block";
        previous.style.display="block";
        track_bar.style.display="block";
        track_timer.style.display="flex";
        showPlayerBtn.style.display="none";
    }
});

backToApp.addEventListener("click", function(){
    if (app) {
        library.style.display="none";
        app.classList.remove('appResized');
        app.classList.add('app');
        downArrow.style.display="block";
        previous.style.display="block";
        track_bar.style.display="block";
        track_timer.style.display="flex";
        showPlayerBtn.style.display="none";
    }
});

