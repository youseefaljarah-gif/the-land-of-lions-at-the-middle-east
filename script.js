function show(id){
    document.querySelectorAll(".section").forEach(s=>s.style.display="none");
    document.getElementById(id).style.display="block";
}
show("overview");

setInterval(()=>{
    let risk = Math.floor(Math.random()*100);
    document.getElementById("threatBar").style.width=risk+"%";
    document.getElementById("tension").innerText =
        risk>70?"مرتفع":risk>40?"متوسط":"منخفض";
    document.getElementById("probability").innerText =
        (30 + Math.floor(Math.random()*50))+"%";
},4000);

setInterval(()=>{
    let log=document.getElementById("logBox");
    log.innerHTML+="[ "+new Date().toLocaleTimeString()+" ] تحديث تقييم المخاطر...<br>";
    log.scrollTop=log.scrollHeight;
},3000);


function show(id){
    document.querySelectorAll(".section").forEach(s=>s.style.display="none");
    document.getElementById(id).style.display="block";
}
show("overview");

setInterval(()=>{
    let risk = Math.floor(Math.random()*100);
    document.getElementById("threatBar").style.width=risk+"%";
    document.getElementById("tension").innerText =
        risk>70?"مرتفع":risk>40?"متوسط":"منخفض";
    document.getElementById("probability").innerText =
        (30 + Math.floor(Math.random()*50))+"%";
},4000);

setInterval(()=>{
    let log=document.getElementById("logBox");
    log.innerHTML+="[ "+new Date().toLocaleTimeString()+" ] تحديث تقييم المخاطر...<br>";
    log.scrollTop=log.scrollHeight;
},3000);
