function stopwatch() {
    let timerDiv = $('#time');
    let startBtn = $('#startBtn');
    let stopBtn = $('#stopBtn');
    startBtn.on("click", start);
    stopBtn.on("click", stop);
    let seconds = 1;
    let idTimer;

    function start() {
        stopBtn.removeAttr("disabled", "disabled");
        startBtn.attr("disabled", "disabled");
        idTimer = setInterval(timer, 1000);
    }

    function timer() {
        let currSec = Math.floor(seconds % 60);
        let currMinutes = Math.floor(seconds / 60);
        if (currSec < 10){
            currSec = '0' + currSec;
        }
        if (currMinutes < 10){
            currMinutes = '0' + currMinutes;
        }
        $(timerDiv).text(`${currMinutes}:${currSec}`);
        seconds++;
    }

    function stop() {
        startBtn.removeAttr("disabled", "disabled");
        stopBtn.attr("disabled", "disabled");
        clearInterval(idTimer);
        $(timerDiv).text(`00:00`);
        seconds = 0;
    }
}