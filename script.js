document.addEventListener("DOMContentLoaded", function() {

  // ------------------------
  // 1️⃣ الخريطة التفاعلية
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

  // ------------------------
  // 2️⃣ الأخبار المباشرة نموذجية
  const newsList = document.getElementById("newsList");
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
  }
  setInterval(updateNews, 9000);
  updateNews();

  // ------------------------
  // 3️⃣ عداد المشاهدين
  let viewers = Math.floor(Math.random()*500)+200;
  const viewerElem = document.createElement("p");
  viewerElem.innerText = "المشاهدون الآن: " + viewers;
  document.querySelector("#news").prepend(viewerElem);

  setInterval(() => {
    viewers += Math.floor(Math.random()*10);
    viewerElem.innerText = "المشاهدون الآن: " + viewers;
  }, 3500);

  // ------------------------
  // 4️⃣ التنبيهات اللحظية
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

  // ------------------------
  // 5️⃣ جلب الأخبار الحقيقية من JSON Endpoint
  async function fetchLiveNews() {
    try {
      const response = await fetch('https://your-pipedream-or-firebase-endpoint.com/news.json');
      const data = await response.json();
      newsList.innerHTML = '';
      data.telegram_events.forEach(ev => {
        const li = document.createElement("li");
        li.innerText = [Telegram] ${ev.text};
        newsList.appendChild(li);
      });
      data.twitter_events.forEach(ev => {
        const li = document.createElement("li");
        li.innerText = [Twitter] ${ev.text};
        newsList.appendChild(li);
      });
      data.rss_events.forEach(ev => {
        const li = document.createElement("li");
        li.innerHTML = [RSS] <a href="${ev.link}" target="_blank">${ev.title}</a>;
        newsList.appendChild(li);
      });
    } catch (err) {
      console.error("خطأ في جلب الأخبار الحية:", err);
    }
  }
  setInterval(fetchLiveNews, 10000);
  fetchLiveNews();

});
