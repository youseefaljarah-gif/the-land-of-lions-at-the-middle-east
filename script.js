// 1️⃣ إعداد خريطة تفاعلية للشرق الأوسط
const map = L.map('mapContainer').setView([30, 45], 4); // مركز المنطقة
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

// مثال على الأحداث على الخريطة
const events = [
  {country: "العراق", lat:33.3, lon:44.4, type:"سياسي", description:"تحديث سياسي عاجل"},
  {country: "سوريا", lat:34.8, lon:38.6, type:"عسكري", description:"اشتباكات في شمال سوريا"},
  {country: "لبنان", lat:33.9, lon:35.5, type:"اقتصادي", description:"أزمة مالية جديدة"}
];

events.forEach(ev => {
  const color = ev.type === "سياسي" ? "blue" : ev.type === "عسكري" ? "red" : "yellow";
  L.circle([ev.lat, ev.lon], {
    color: color,
    fillColor: color,
    fillOpacity: 0.5,
    radius: 50000
  }).addTo(map).bindPopup(`<b>${ev.country}</b><br>${ev.description}`);
});

// 2️⃣ الأخبار المباشرة (مثال بسيط من YouTube RSS)
const newsList = document.getElementById("newsList");
const sampleNews = [
  "عاجل: مؤتمر سياسي في بغداد",
  "تطورات عسكرية جديدة في سوريا",
  "أزمة اقتصادية في لبنان"
];

function updateNews() {
  const n = sampleNews[Math.floor(Math.random()*sampleNews.length)];
  const li = document.createElement("li");
  li.innerText = n;
  newsList.prepend(li);
}
setInterval(updateNews, 9000);
updateNews();

// 3️⃣ عداد مشاهدين وهمي
let viewers = Math.floor(Math.random()*500)+200;
const viewerElem = document.createElement("p");
viewerElem.innerText = "المشاهدون الآن: " + viewers;
document.querySelector("#news").prepend(viewerElem);

setInterval(() => {
  viewers += Math.floor(Math.random()*10);
  viewerElem.innerText = "المشاهدون الآن: " + viewers;
}, 3500);

// 4️⃣ تنبيهات لحظية (popup)
const alertBox = document.getElementById("alertBox");
function newAlert(msg){
  const div = document.createElement("div");
  div.innerText = "⚡ " + msg;
  alertBox.prepend(div);
}
setInterval(() => {
  const messages = ["تنبيه عاجل: تحرك سياسي جديد", "تنبيه عاجل: تحديث أمني", "تنبيه عاجل: حدث اقتصادي مهم"];
  const msg = messages[Math.floor(Math.random()*messages.length)];
  newAlert(msg);
}, 12000);
