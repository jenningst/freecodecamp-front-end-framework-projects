/** Any helper functions needed for this project **/
export function formatTime(seconds) {
    return seconds / 60 / 100;
}

export function formatCountdown(seconds) {
    // 1500 s
    let minutes = parseInt(seconds / 60);
    let remaining = ``;
    return ``
}

export function calculate(start, stop) {
    let minutes, seconds;
    let timeRemaining = parseInt((stop - start) / 1000);
    if (timeRemaining >= 0) {
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);
        console.log('tick');
    } else {
        return;
    }
}