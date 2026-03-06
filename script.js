document.addEventListener("DOMContentLoaded", function() {

  // 1️⃣ خريطة تفاعلية
  const map = L.map('mapContainer').setView([30, 45], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);

  const events = [
    {country: "العراق", lat:33.3, lon:44.4, type:"سياسي", description:"تحديث سياسي عاجل"},
    {country: "سوريا", lat:34.8, lon:38.6, type:"عسكري", description:"اشتباكات شمال سوريا"},
    {country: "لبنان", lat:33.9, lon:35.5, type:"اقتصادي", description:"أزمة مالية"},
    {country: "إيران", lat:35.7, lon:51.4, type:"سياسي", description:"اجتماع وزاري"},
    {country: "إسرائيل", lat:31.8, lon:35.2, type:"أمني", description:"تحرك أمني عاجل"}
  ];

  events.forEach(ev => {
    const color = ev.type === "سياسي" ? "blue" :
                  ev.type === "عسكري" ? "red" :
                  ev.type === "اقتصادي" ? "yellow" : "green";

    L.circle([ev.lat, ev.lon], {color, fillColor: color, fillOpacity:0.5, radius:50000})
      .addTo(map)
      .bindPopup(`<b>${ev.country}</b><br>${ev.description}`);
  });

  // 2️⃣ الأخبار المباشرة نموذجية
  const newsList = document.getElementById("newsList");
  const viewerCount = document.getElementById("viewerCount");
  let viewers = Math.floor(Math.random()*500)+200;
  viewerCount.innerText = "المشاهدون الآن: " + viewers;

  const sampleNews = [
    "عاجل: مؤتمر سياسي في بغداد",
    "تطورات عسكرية جديدة في سوريا",
    "أزمة اقتصادية في لبنان",
    "اجتماع وزاري في إيران",
    "تحرك أمني عاجل في إسرائيل"
  ];

  function updateNews() {
    const n = sampleNews[Math.floor(Math.random()*sampleNews.length)];
    const li = document.createElement("li");
    li.innerText = n;
    newsList.prepend(li);

    // تحديث المشاهدين
    viewers += Math.floor(Math.random()*10);
    viewerCount.innerText = "المشاهدون الآن: " + viewers;
  }

  setInterval(updateNews, 9000);
  updateNews();

  // 3️⃣ التنبيهات اللحظية
  const alertBox = document.getElementById("alertBox");
  function newAlert(msg){
    const div = document.createElement("div");
    div.innerText = "⚡ " + msg;
    alertBox.prepend(div);
  }
  setInterval(() => {
    const messages = [
      "تنبيه عاجل: تحرك سياسي جديد",
      "تنبيه عاجل: تحديث أمني",
      "تنبيه عاجل: حدث اقتصادي مهم",
      "تنبيه عاجل: اجتماع وزاري في المنطقة"
    ];
    const msg = messages[Math.floor(Math.random()*messages.length)];
    newAlert(msg);
  }, 12000);

});
