function timer () {
    let sec = document.getElementById("timer");
    if (sec.textContent > 0) {
        sec.textContent -= 1;
    } else {
        alert("Вы победили в конкурсе!");        
    }      
};

setInterval(timer, 1000);