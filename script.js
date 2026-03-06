const iframe = document.getElementById("stream");

// تغيير البث داخل iframe للقنوات المسموح بها
function changeStream(channel){
  iframe.src = "https://www.youtube.com/embed/live_stream?channel=" + channel;
}

// فتح قناة في نافذة جديدة
function openExternal(url){
  window.open(url, "_blank");
}

// عداد مشاهدين وهمي
let viewers = Math.floor(Math.random()*500)+100;
const viewerElem = document.getElementById("viewers");

function updateViewers(){
  viewers += Math.floor(Math.random()*5);
  viewerElem.innerText = "المشاهدون الآن: " + viewers;
}
updateViewers();
setInterval(updateViewers, 3500);

// تحديث الأخبار تلقائي
const news = [
  "أخبار عاجلة من الساحة العربية",
  "تقارير مباشرة من الحدث",
  "تحليلات سياسية لحظية",
  "عاجل: تطورات جديدة في الشرق الأوسط",
  "آخر أخبار الاقتصاد العالمي",
  "تغطية حية للأحداث السياسية",
  "ملخص الأخبار اليوم"
];

const newsList = document.getElementById("newsList");

function updateNews(){
  let n = news[Math.floor(Math.random()*news.length)];
  let li = document.createElement("li");
  li.innerText = n;
  newsList.prepend(li);
}
setInterval(updateNews, 9000);
updateNews();
