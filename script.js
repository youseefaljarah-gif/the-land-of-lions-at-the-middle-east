document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const x = (window.innerWidth / 2 - e.pageX) / 20;
    const y = (window.innerHeight / 2 - e.pageY) / 20;
    
    container.style.transform = rotateY(${x}deg) rotateX(${-y}deg);
});

console.log("تم تفعيل نظام يوسف الجراح البرجوازي بنجاح.");
