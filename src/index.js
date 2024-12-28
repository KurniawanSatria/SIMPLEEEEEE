// Bento grid
const audio = new Audio(
"https://github.com/SatganzDevs/personal-portfolioV5/raw/main/assets/audio/Rammstein%20%20Sonne.mp3"
);
let is_playing = false;

function playBacksound() {
const icon = document.getElementById("audioicon");
const tst = document.getElementById("audiotxt");
if (!is_playing) {
icon.classList.remove("fa-play");
icon.classList.add("fa-pause");
tst.innerHTML = "Pause Audio"
audio.play();
is_playing = true;

audio.addEventListener("ended", () => {
icon.classList.remove("fa-pause");
icon.classList.add("fa-play");
tst.innerHTML = "Play Audio"
is_playing = false;
});
} else {
audio.pause();
audio.currentTime = 0;
icon.classList.remove("fa-pause");
icon.classList.add("fa-play");
tst.innerHTML = "Play Audio"
is_playing = false;
}
}

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
const userInfoElement = document.getElementById("user-info");
userInfoElement.innerHTML = "Fetching location data...";
try {
const response = await fetch("https://ipapi.co/json/");
const data = await response.json();
if (data.error) {
userInfoElement.innerHTML = "Failed to fetch location info.";
return;
}
const locationInfo = `
Country: ${data.country_name}<br>
Region: ${data.region}<br>
City: ${data.city}<br>
Latitude: ${data.latitude}<br>
Longitude: ${data.longitude}<br>
IP: ${data.ip}
`;
userInfoElement.innerHTML = locationInfo;
} catch (error) {
userInfoElement.innerHTML = "An error occurred while fetching location data.";
console.error(error);
}
}


window.addEventListener("load", all);
setTimeout(all, 1000);
