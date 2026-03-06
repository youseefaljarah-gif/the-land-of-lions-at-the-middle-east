const iframe = document.getElementById("stream");

// تغيير البث عند الضغط على أي زر
function changeStream(channel){
    iframe.src = "https://www.youtube.com/embed/live_stream?channel=" + channel;
}

// عداد مشاهدين وهمي
let viewers = Math.floor(Math.random()*900)+100;
const viewerElem = document.getElementById("viewers");

function updateViewers(){
    viewers += Math.floor(Math.random()*10);
    viewerElem.innerText = "المشاهدون الآن: " + viewers;
}
updateViewers();
setInterval(updateViewers, 3000);

// تحديث الأخبار تلقائي
const news = [
    "توتر سياسي في الشرق الأوسط",
    "اجتماعات دبلوماسية في المنطقة",
    "تحليل استراتيجي للأحداث الجارية",
    "تطورات جديدة في الملف الإقليمي",
    "تحديث عاجل: تطورات جديدة في العراق وإيران",
    "أخبار عاجلة: متابعة الأحداث اليومية في الوطن العربي",
    "تغطية حية لأبرز الأحداث السياسية",
    "ملخص الأحداث العربية والعالمية"
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
