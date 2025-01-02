// Bento grid
function isTouchDevice() {
return (
"ontouchstart" in window ||
navigator.maxTouchPoints > 0 ||
navigator.msMaxTouchPoints > 0
);
}

const bentoProjects = document.querySelectorAll(".bento-project");

const opacityClass = "opacity-40";

if (!isTouchDevice()) {
bentoProjects.forEach((node) => {
node.addEventListener("mouseenter", (event) => {
bentoProjects.forEach((node) => {
if (node !== event.target) node.classList.add(opacityClass);
});
});
node.addEventListener("mouseleave", () => {
bentoProjects.forEach((node) => node.classList.remove(opacityClass));
});
});
}

// Theme toggle

const themeToggleButton = document.querySelector(".header-theme-toggle");
const toggleIcon = document.getElementById("toggle-icon");
themeToggleButton.addEventListener("click", (event) => {
event.preventDefault();
if (document.documentElement.classList.contains("dark")) {
toggleIcon.classList.remove("fa-sun");
toggleIcon.classList.add("fa-moon");
document.documentElement.classList.remove("dark");
localStorage.theme = "light";
} else {
toggleIcon.classList.remove("fa-moon");
toggleIcon.classList.add("fa-sun");
document.documentElement.classList.add("dark");
localStorage.theme = "dark";
}
});

// Watch for system preference changes
window
.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", (event) => {
if (event.matches) {
document.documentElement.classList.add("dark");
localStorage.theme = "dark";
} else {
document.documentElement.classList.remove("dark");
localStorage.theme = "light";
}
});

async function all() {
const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/today");
const data = await response.json();
document.getElementById("quote").innerHTML = `&ldquo;${data[0].q}&rdquo;`;
document.getElementById("author").innerHTML = `&mdash; ${data[0].a}`;
const date = new Date();
const d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dn = d[date.getDay()];
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
const ampm = h >= 12 ? "PM" : "AM";
h = h % 12; 
h = h ? h : 12; 
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;
const time = ' ' + dn + ', ' +h + ":" + m + " " + ampm;
document.getElementById("MyClockDisplay").innerText = time;
}



setTimeout(all, 1000);

window.addEventListener('load', () => {
all()
document.body.classList.add('loaded');
});
const playlist = [
'https://raw.githubusercontent.com/SatganzDevs/personal-portfolioV5/main/assets/audio/Cry%20-%20Cigarettes%20After%20Sex%20(128kbps).mp3',
'https://raw.githubusercontent.com/SatganzDevs/personal-portfolioV5/main/assets/audio/Line%20Without%20a%20Hook.mp3',
'https://raw.githubusercontent.com/SatganzDevs/personal-portfolioV5/main/assets/audio/kamin.mp3',
];
let currentIndex = 0; 
const audioElement = document.getElementById('player');
const player = new Plyr(audioElement, {
autoplay: false,
loop: { active: false }, 
controls: [] 
});
const loadNextAudio = () => {
currentIndex = (currentIndex + 1) % playlist.length; 
audioElement.src = playlist[currentIndex]; 
audioElement.play(); 
};
audioElement.src = playlist[currentIndex];
document.addEventListener('click', () => {
if (audioElement.paused) {
audioElement.play();
}
});
audioElement.addEventListener('ended', loadNextAudio);
new Typed('#typed-text', {
strings: ['Kurniawan Satria', 'a Programmer', 'a Web Developer', 'a Lover'],
typeSpeed: 70, 
backSpeed: 70, 
loop: true,    
});
