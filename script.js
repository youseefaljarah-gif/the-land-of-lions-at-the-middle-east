const iframe = document.getElementById("stream");

function changeStream(channel){
  iframe.src = "https://www.youtube.com/embed/live_stream?channel=" + channel;
}

// عداد مشاهدين وهمي
let viewers = Math.floor(Math.random()*500)+100;
const viewerElem = document.getElementById("viewers");

function updateViewers(){
  viewers += Math.floor(Math.random()*5);
  viewerElem.innerText = "المشاهدون الآن: " + viewers;
}
updateViewers();
setInterval(updateViewers, 3000);

// تحديث الأخبار تلقائي
const news = [
  "أحدث الأخبار العربية والعالمية مباشرة",
  "تغطية عاجلة: تطورات الأحداث السياسية",
  "تحليل أحداث الساعة من مصادر موثوقة",
  "تحديثات الساعة للأخبار الاقتصادية",
  "تقارير مباشرة من الميدان",
  "أخبار الرياضة العالمية"
];

const newsList = document.getElementById("newsList");

function updateNews(){
  let n = news[Math.floor(Math.random()*news.length)];
  let li = document.createElement("li");
  li.innerText = n;
  newsList.prepend(li);
}
setInterval(updateNews, 8000);
updateNews();
