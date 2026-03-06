// script.js

// 1️⃣ رسالة ترحيب عند تحميل الصفحة
window.addEventListener("load", () => {
    alert("مرحبا بك في Iran Live Clone! استمتع بالتصميم التفاعلي.");
});

// 2️⃣ تغيير لون القسم عند المرور عليه
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.backgroundColor = "#e0f7fa"; // لون عند المرور
    });
    section.addEventListener("mouseleave", () => {
        section.style.backgroundColor = "#fff"; // اللون الافتراضي
    });
});

// 3️⃣ Smooth scroll عند الضغط على الروابط
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// 4️⃣ عداد مشاهدات وهمي لتفاعل المستخدم
const liveSection = document.getElementById("live");
const counter = document.createElement("p");
counter.id = "viewCounter";
counter.style.fontWeight = "bold";
counter.style.color = "#d32f2f";
liveSection.appendChild(counter);

let viewers = Math.floor(Math.random() * 500) + 50; // عدد مشاهدين عشوائي
function updateCounter() {
    viewers += Math.floor(Math.random() * 5); // زيادة عشوائية
    document.getElementById("viewCounter").innerText = المشاهدين الحاليين: ${viewers};
}
updateCounter();
setInterval(updateCounter, 5000); // ت
