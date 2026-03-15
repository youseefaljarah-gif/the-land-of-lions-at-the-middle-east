window.onload = () => {
    let p = 0;
    const bar = document.getElementById('progress-bar');
    const pc = document.getElementById('load-pc');
    const loader = document.getElementById('loader-wrapper');

    const int = setInterval(() => {
        p += Math.floor(Math.random() * 20);
        if(p >= 100) {
            p = 100;
            clearInterval(int);
            setTimeout(() => loader.style.display = 'none', 500);
        }
        bar.style.width = p + '%';
        pc.innerText = p + '%';
    }, 150);
};

// Matrix Background
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const drops = Array(Math.floor(canvas.width/15)).fill(1);
setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.05)"; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#556b2f"; drops.forEach((y, i) => {
        ctx.fillText(Math.random()>0.5?"0":"1", i*15, y*15);
        if(y*15>canvas.height && Math.random()>0.975) drops[i]=0; drops[i]++;
    });
}, 50);
