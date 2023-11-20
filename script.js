let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.querySelector('#display-time');
let timer = null;

function stopwatch() {
    seconds += 1;
    if(seconds === 60) {
        seconds = 0;
        minutes += 1;
        if(minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    }

    displayTime.innerHTML = `${hours < 10 ? '0'+hours : hours}:${minutes < 60 ? '0'+minutes : minutes}:${seconds < 60 ? '0'+seconds : seconds}`
}

function watchStart() {
    if(timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 1000);
}
