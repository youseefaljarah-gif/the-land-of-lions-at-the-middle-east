// --- إمبراطورية يوسف الجراح: التفاعل الذكي ---

document.addEventListener('DOMContentLoaded', () => {
    console.log("%cتم تفعيل نظام يوسف الجراح البرمجي..", "color: #556b2f; font-size: 20px; font-weight: bold;");

    // 1. تأثير تتبع الماوس (Mouse Follower)
    // يخلق هالة زيتونية تتبع حركة الماوس في الصفحة
    const container = document.querySelector('.container');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        container.style.transform = perspective(1000px) rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * -10}deg);
    });

    // 2. تأثير الطباعة التلقائية للعناوين (Typing Effect)
    const title = document.querySelector('.main-title');
    const text = title.innerText;
    title.innerText = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    typeWriter();

    // 3. رسائل تفاعلية عند الضغط على الروابط
    const links = document.querySelectorAll('.link-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            console.log(`%cاستعداد للدخول إلى: ${link.innerText}`, "color: #d4af37");
        });

        link.addEventListener('click', (e) => {
            // تأثير نبضة عند الضغط
            link.style.transform = "scale(0.9)";
            setTimeout(() => { link.style.transform = "scale(1)"; }, 100);
        });
    });

    // 4. نظام الترحيب الصوتي أو التنبيهي
    // سيظهر تنبيه ترحيبي بمجرد دخول أي شخص للموقع
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.innerHTML = "مرحباً بك في إمبراطورية يوسف";
        welcomeMsg.style.cssText = `
            position: fixed; bottom: 20px; right: 20px;
            background: #556b2f; color: white; padding: 10px 20px;
            border-radius: 50px; border: 1px solid #d4af37;
            font-size: 14px; box-shadow: 0 0 20px rgba(0,0,0,0.5);
            z-index: 1000; animation: slideIn 0.5s forwards;
        `;
        document.body.appendChild(welcomeMsg);
        
        // إخفاء الرسالة بعد 4 ثواني
        setTimeout(() => { welcomeMsg.style.display = 'none'; }, 4000);
    }, 2000);
});

// إضافة أنيميشن للرسالة الترحيبية
const style = document.createElement('style');
style.innerHTML = `
@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}`;
document.head.appendChild(style);
