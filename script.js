function show(id){
    document.querySelectorAll(".section").forEach(s=>s.style.display="none");
    document.getElementById(id).style.display="block";
}
show("overview");

function updateTension(){
    fetch("http://127.0.0.1:5000/tension")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("tension").innerText = data.level + " (" + data.score + ")";
        document.getElementById("tensionBar").style.width = data.score + "%";
        let log = document.getElementById("logBox");
        log.innerHTML += "[ " + new Date().toLocaleTimeString() + " ] تم// ذكاء اصطناعي أسئلة وأجوبة
function askAI(){
    const question = document.getElementById("userQuestion").value;
    if(question.trim() === ""){
        document.getElementById("aiAnswer").innerText="الرجاء كتابة سؤال.";
        return;
    }

    fetch("http://127.0.0.1:5000/ask?question=" + encodeURIComponent(question))
    .then(response => response.json())
    .then(data => {
        document.getElementById("aiAnswer").innerText = data.answer;
    })
    .catch(err=>{
        document.getElementById("aiAnswer").innerText = "خطأ في الاتصال بالذكاء الاصطناعي";
        console.error(err);
    });
}
