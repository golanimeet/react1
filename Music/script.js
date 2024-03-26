console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = document.getElementsByClassName('songItem');

let song =[
    {songName: "Warriyo - Mortals (feat. Laura Brehm) [NCS Release]", filePath: "1.mp3", coverPath:"1.jpg"},
    {songName: "Cielo - Huma - Huma", filePath: "2.mp3", coverPath:"2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "3.mp3", coverPath:"3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]-320k", filePath: "4.mp3", coverPath:"4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release-(kanhai80.wapkiz.com)Salam-e-Ishq", filePath: "5.mp3", coverPath:"5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "6.mp3", coverPath:"6.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "7.mp3", coverPath:"7.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].filePath;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //Upadate SeekBar
    prograss = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})