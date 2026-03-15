window.addEventListener('load', () => {
    let p = 0;
    const interval = setInterval(() => {
        p += Math.floor(Math.random() * 15) + 1;
        if(p >= 100) {
            p = 100; clearInterval(interval);
            setTimeout(() => document.getElementById('loader-wrapper').style.display='none', 500);
        }
        document.getElementById('progress-bar').style.width = p + '%';
        document.getElementById('load-pc').innerText = p + '%';
    }, 100);
});

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const drops = Array(Math.floor(canvas.width / 14)).fill(1);
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#556b2f"; drops.forEach((y, i) => {
        ctx.fillText("01", i * 14, y * 14);
        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(draw, 50);

const term = document.getElementById('term-body');
const msgs = ["[OK] System Boot", "[INFO] Music Loaded", "[SUCCESS] Baghdad Node Active"];
setInterval(() => {
    let line = document.createElement('div');
    line.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    term.appendChild(line);
    if(term.childNodes.length > 4) term.removeChild(term.firstChild);
}, 2500);
