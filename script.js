// reference html elements
let displayTime = document.querySelector('#display-time');
let [seconds, minutes, hours] = [0, 0, 0];
// the timer will be an interval object when started
// for now, initialize it as null
let timer = null;

// this is the function that increases the time by one second and displays the new time
function stopwatch() {
    seconds += 1;

    // account for time rollovers
    if(seconds === 60) {
        seconds = 0;
        minutes += 1;
        if(minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    }

    // we want a two digit number, manually add in an extra 0 in front of 0-9
    displayTime.innerHTML = `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`
}

function watchStart() {

    // if there is already a timer running, we don't want two different timers active
    // clears the existing timer OBJECT (not the time)
    if(timer !== null) {
        clearInterval(timer);
    }

    // assigns the timer variable to an interval object, runs the stopwatch function every 1 second
    timer = setInterval(stopwatch, 1000);
}

// removes the interval
function watchStop() {
    clearInterval(timer);
}

// removes the interval AND resets variables
function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = '00:00:00';
}
