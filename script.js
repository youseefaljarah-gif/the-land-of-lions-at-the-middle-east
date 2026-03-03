const KEY = "intel2026";

function login(){
    let pass = document.getElementById("password").value;
    if(pass === KEY){
        document.getElementById("login").style.display="none";
        document.getElementById("system").style.display="block";
        showSection("dashboard");
        startSimulation();
    }else{
        document.getElementById("error").innerText="ACCESS DENIED";
    }
}

function logout(){
    location.reload();
}

function showSection(id){
    document.querySelectorAll(".section").forEach(s=>s.style.display="none");
    document.getElementById(id).style.display="block";
}

function startSimulation(){

    setInterval(()=>{
        let threat = Math.floor(Math.random()*100);
        document.getElementById("bar").style.width = threat+"%";

        document.getElementById("threatLevel").innerText =
        threat>70?"HIGH":threat>40?"MEDIUM":"LOW";

        document.getElementById("status").innerText =
        threat>80?"ALERT":"SECURE";

        document.getElementById("load").innerText =
        Math.floor(Math.random()*100)+"%";

        document.getElementById("targets").innerText =
        Math.floor(Math.random()*15)+1;

    },3000);

    const records = [
        "Encrypted file intercepted",
        "Unknown signal detected",
        "Sector Alpha anomaly",
        "Suspicious login attempt"
    ];

    records.forEach(r=>{
        let li=document.createElement("li");
        li.innerText=r;
        document.getElementById("records").appendChild(li);
    });

    setInterval(()=>{
        let term=document.getElementById("terminal");
        term.innerHTML+="[ "+new Date().toLocaleTimeString()+" ] scanning network...<br>";
        term.scrollTop=term.scrollHeight;
    },2000);
}
