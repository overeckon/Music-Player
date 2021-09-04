const music = document.querySelector("audio");
const img =document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
{
  name:"ladki",
  title:"Ek Ladki Ko Dekha",
  artist:"Anant Parashar",
},
{
  name: "de",
  title:"De Una Vez",
  artist:"Selena Gomez ",
},
{
  name: "Chaliye",
  title: "Raatan Lambiyan",
  artist: "Jubin Nautiyal",
},

{
  name: "manike",
  title:"Manike Mage Hithe",
  artist:"Muzistar, Yohani",
},

{
  name: "parchaiyon",
  title:"Parchaiyon Mein",
  artist:"Ashwin Adwani ",
},
{
  name: "shift",
  title:"Blank Space",
  artist:"Taylor Swift",
},
{
  name: "kyun",
  title:"Kyun Hai",
  artist:"Gajendra Verma ",
},
{
  name: "ego",
  title:"Everlasting Ego",
  artist:"lvly, Milva ",
},
{
  name: "roi",
  title:"Dil Royi jaye",
  artist:"Arijit, Rochak ",
},



];

let isPlaying =false;
//for pause function
const playMusic = () => {
  isPlaying =true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};
//for pause function
const pauseMusic = () =>{
  isPlaying =false ;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener('click', () =>{
  isPlaying ? pauseMusic() : playMusic();
});
// changing the music data
const loadSong = (songs) => {
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src = "music/" + songs.name + ".mp3";
img.src = "images/" + songs.name + ".jpg";
};
songIndex = 0;
// loadSong(songs[]);
const nextSong = () =>{
songIndex = (songIndex + 1)% songs.length;
loadSong(songs[songIndex]);
music.play();
playMusic();
};
const prevSong = () =>{
songIndex = (songIndex - 1 + songs.length)% songs.length;
loadSong(songs[songIndex]);
music.play();
playMusic();
};
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
