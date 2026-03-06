document.addEventListener("DOMContentLoaded", function() {

  // -------------------------
  // 🔵 الخريطة التفاعلية
  const map = L.map('mapContainer').setView([30, 45], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);

  const events = [
    {country: "العراق", lat:33.3, lon:44.4, type:"سياسي", description:"تحديث سياسي عاجل"},
    {country: "سوريا", lat:34.8, lon:38.6, type:"عسكري", description:"اشتباكات شمال سوريا"},
    {country: "لبنان", lat:33.9, lon:35.5, type:"اقتصادي", description:"أزمة مالية"},
    {country: "إيران", lat:35.7, lon:51.4, type:"اجتماع وزاري"},
  ];

  events.forEach(ev => {
    L.circle([ev.lat, ev.lon], {
      color: ev.type === "سياسي" ? "blue" : ev.type === "عسكري" ? "red" : "yellow",
      fillOpacity: 0.4,
      radius: 40000
    }).addTo(map)
      .bindPopup(`<b>${ev.country}</b><br>${ev.description}`);
  });

  // -------------------------
  // 📡 جلب الأخبار من Backend
  async function fetchNews() {
    try {
      const res = await fetch('/api/news');
      const data = await res.json();
      const newsList = document.getElementById("newsList");
      document.getElementById("newsList").innerHTML = "";
      data.forEach(n => {
        const li = document.createElement("li");
        li.innerText = n.title;
        newsList.appendChild(li);
      });
    } catch (e) {
      console.log(e);
    }
  }
  fetchNews();
  setInterval(fetchNews, 7000);

  // -------------------------
  // 🚨 عداد مشاهدين وهمي
  let viewers = Math.floor(Math.random() * 500) + 100;
  const viewerCount = document.getElementById("viewerCount");
  viewerCount.innerText = "المشاهدون الآن: " + viewers;
  setInterval(() => {
    viewers += Math.floor(Math.random() * 5);
    viewerCount.innerText = "المشاهدون الآن: " + viewers;
  }, 4000);

  // -------------------------
  // ⚡ التنبيهات اللحظية
  const alertBox = document.getElementById("alertBox");
  function newAlert(msg) {
    const div = document.createElement("div");
    div.innerText = "⚡ " + msg;
    alertBox.prepend(div);
  }
  setInterval(() => {
    const msgs = [
      "تنبيه عاجل: حدث سياسي جديد",
      "تنبيه عاجل: تحديث أمني",
      "تنبيه عاجل: حدث اقتصادي مهم"
    ];
    newAlert(msgs[Math.floor(Math.random()*msgs.length)]);
  }, 12000);

  // -------------------------
  // ➕ إضافة خبر من لوحة التحكم
  window.addNews = async function() {
    const title = document.getElementById("newTitle").value.trim();
    if (!title) return;
    await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    document.getElementById("newTitle").value = "";
    fetchNews();
  };

});
