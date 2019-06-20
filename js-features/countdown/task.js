let timer = setInterval(function() {
    let sec = document.getElementById("timer");
    if (sec.textContent > 0) {
        sec.textContent -= 1;
    } else {
        clearInterval(timer);
        alert("Вы победили в конкурсе!");              
    }      
}, 1000);