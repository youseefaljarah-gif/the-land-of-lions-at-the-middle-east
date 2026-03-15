// 1. شاشة التحميل
window.addEventListener('load', () => {
    let p = 0;
    const bar = document.getElementById('progress-bar');
    const pcText = document.getElementById('load-pc');
    const interval = setInterval(() => {
        p += Math.floor(Math.random() * 15) + 1;
        if(p >= 100) {
            p = 100; clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader-wrapper').style.opacity = '0';
                setTimeout(() => document.getElementById('loader-wrapper').style.display='none', 500);
            }, 500);
        }
        bar.style.width = p + '%';
        pcText.innerText = p + '%';
    }, 100);
});

// 2. تأثير الماتريكس
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const drops = Array(Math.floor(canvas.width / 14)).fill(1);
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#556b2f"; ctx.font = "14px monospace";
    drops.forEach((y, i) => {
        const text = Math.random() > 0.5 ? "0" : "1";
        ctx.fillText(text, i * 14, y * 14);
        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(draw, 50);

// 3. نافذة الأوامر (اللوج)
const term = document.getElementById('term-body');
const msgs = ["[OK] System Boot", "[INFO] Radio Active", "[DATA] Baghdad Node", "[SUCCESS] Encrypted"];
setInterval(() => {
    let line = document.createElement('div');
    line.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    term.appendChild(line);
    if(term.childNodes.length > 4) term.removeChild(term.firstChild);
}, 2500);
