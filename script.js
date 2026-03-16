// Real-Time Clock
const currentTime = document.querySelector('.current-time');
function updateTime(){
    const now = new Date();
    let h = now.getHours().toString().padStart(2,'0');
    let m = now.getMinutes().toString().padStart(2,'0');
    let s = now.getSeconds().toString().padStart(2,'0');
    currentTime.textContent = `${h}:${m}:${s}`;
}
setInterval(updateTime, 1000);
updateTime();

// Sample Sehri/Iftar Time - Replace with API
let sehriTime = new Date();
sehriTime.setHours(4,30,0); // 04:30:00
let iftarTime = new Date();
iftarTime.setHours(18,30,0); // 18:30:00

const sehriCount = document.getElementById('sehri-count');
const iftarCount = document.getElementById('iftar-count');

function updateCountdown(){
    const now = new Date();
    let sDiff = Math.max(0, Math.floor((sehriTime - now)/1000));
    let iDiff = Math.max(0, Math.floor((iftarTime - now)/1000));

    function format(diff){
        let h = Math.floor(diff/3600).toString().padStart(2,'0');
        let m = Math.floor((diff%3600)/60).toString().padStart(2,'0');
        let s = (diff%60).toString().padStart(2,'0');
        return `${h}:${m}:${s}`;
    }

    sehriCount.textContent = format(sDiff);
    iftarCount.textContent = format(iDiff);
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Theme Switch
let themes = [
    'linear-gradient(to bottom, #1e3c72, #2a5298)',
    'linear-gradient(to bottom, #ff5f6d, #ffc371)',
    'linear-gradient(to bottom, #11998e, #38ef7d)',
    'linear-gradient(to bottom, #20002c, #cbb4d4)',
    'linear-gradient(to bottom, #ffb347, #ffcc33)',
];
let currentTheme = 0;
document.getElementById('theme-next').onclick = ()=>{
    currentTheme = (currentTheme+1)%themes.length;
    document.body.style.background = themes[currentTheme];
};
document.getElementById('theme-prev').onclick = ()=>{
    currentTheme = (currentTheme-1+themes.length)%themes.length;
    document.body.style.background = themes[currentTheme];
};

// Reset / Set Time Buttons
document.getElementById('reset-time').onclick = ()=>{
    sehriTime = new Date();
    sehriTime.setHours(4,30,0);
    iftarTime = new Date();
    iftarTime.setHours(18,30,0);
};

document.getElementById('set-time').onclick = ()=>{
    let sInput = prompt("Set Sehri Time (HH:MM in 24h):","04:30");
    let iInput = prompt("Set Iftar Time (HH:MM in 24h):","18:30");
    if(sInput){
        let [sh,sm] = sInput.split(':');
        sehriTime.setHours(sh,sm,0);
    }
    if(iInput){
        let [ih,im] = iInput.split(':');
        iftarTime.setHours(ih,im,0);
    }
};

// Custom Sound
document.getElementById('custom-sound').onchange = function(e){
    let file = e.target.files[0];
    if(file){
        let audio = new Audio(URL.createObjectURL(file));
        audio.play();
    }
};

// AI Suggestion Placeholder - update every 10s
let aiTexts = [
    "Stay hydrated during Sehri!",
    "Plan your Iftar meal wisely.",
    "Remember to pray on time!",
    "Take a short walk after Iftar.",
    "Read Quran after Salah."
];
setInterval(()=>{
    document.getElementById('ai-text').textContent = "AI Suggestion: "+aiTexts[Math.floor(Math.random()*aiTexts.length)];
},10000);
