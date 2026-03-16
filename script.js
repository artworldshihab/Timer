document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('landing-page').style.transform = 'translateY(-100%)';
    setTimeout(() => {
        document.getElementById('app-container').classList.remove('hidden');
    }, 500);
});

// Step 3: Real Time Clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock-display').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Step 4 & 5: Aladhan API Integration (Simple Example)
async function getPrayerTimes() {
    // এখানে আপনার লোকেশন ডায়নামিক করতে পারেন
    const res = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=2');
    const data = await res.json();
    const timings = data.data.timings;
    
    // Countdown logic logic goes here for timings.Fajr and timings.Maghrib
}
getPrayerTimes();

// Step 6: Zoom Logic
let currentZoom = 1;
function zoomTimer(val) {
    currentZoom *= val;
    document.getElementById('timer-card').style.transform = `scale(${currentZoom})`;
}

// Step 8: Theme Switcher
const themes = [
    { name: 'Garden', bg: 'linear-gradient(to bottom, #134e5e, #71b280)' },
    { name: 'Night', bg: 'radial-gradient(circle, #2c3e50, #000000)' },
    { name: 'Neon', bg: '#000', color: '#0ff' }
];

const themeContainer = document.getElementById('theme-switcher');
themes.forEach(theme => {
    let btn = document.createElement('div');
    btn.className = 'theme-dot';
    btn.style.background = theme.bg;
    btn.onclick = () => {
        document.getElementById('app-container').style.background = theme.bg;
    };
    themeContainer.appendChild(btn);
});

// Step 11: AI Suggestions
const tips = [
    "সেহরিতে পর্যাপ্ত পানি পান করুন।",
    "ইফতারের শুরুতে খেজুর খাওয়া সুন্নত।",
    "রাত্রে তাড়াতাড়ি ঘুমানোর চেষ্টা করুন।"
];

setInterval(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    const aiText = document.getElementById('ai-text');
    aiText.style.opacity = 0;
    setTimeout(() => {
        aiText.innerText = randomTip;
        aiText.style.opacity = 1;
    }, 500);
}, 10000);

// Fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
