// --- إمبراطورية يوسف الجراح: نظام التفاعل المتقدم ---
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// الحروف الأساسية لمطر الماتريكس
const letters = "YOUSSIVALJARAH010101";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// تعريف الألوان الملكية والنيون (للتغيير عند الضغط)
const colors = {
    base: "#556b2f", // الزيتوني الملكي
    neonRed: "#ff073a",
    neonGreen: "#39ff14",
    neonBlue: "#0ff",
    neonPurple: "#bc13fe",
    neonGold: "#ffd700"
};

let currentColor = colors.base; // اللون الحالي للمطر
let neonChangeTimeout; // مؤقت للعودة للون الأصلي

// تهيئة أعمدة المطر
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// وظيفة رسم الماتريكس
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = currentColor;
    ctx.font = fontSize + "px Courier New";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// --- تفعيل تأثير الـ 3D عند تحريك الماوس ---
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    container.style.transform = rotateY(${x}deg) rotateX(${-y}deg);
});

// --- تفعيل ميزة تغير ألوان الماتريكس عند الضغط (NEW) ---
document.addEventListener('mousedown', () => {
    // اختيار لون عشوائي من ألوان النيون
    const neonColors = [colors.neonRed, colors.neonGreen, colors.neonBlue, colors.neonPurple, colors.neonGold];
    currentColor = neonColors[Math.floor(Math.random() * neonColors.length)];
    
    // إلغاء المؤقت السابق إذا وُجد
    if (neonChangeTimeout) clearTimeout(neonChangeTimeout);
    
    // العودة للون الزيتوني بعد 3 ثواني
    neonChangeTimeout = setTimeout(() => {
        currentColor = colors.base;
    }, 3000); // 3000 مللي ثانية = 3 ثواني
});

// تشغيل النظام
setInterval(drawMatrix, 35);

// تحديث حجم الكانفاس عند تغيير حجم النافذة
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

console.log("%cتم تفعيل نظام Matrix يوسف الجراح التفاعلي. جرب الضغط الآن!", "color: #39ff14; font-size: 16px; font-weight: bold;");
