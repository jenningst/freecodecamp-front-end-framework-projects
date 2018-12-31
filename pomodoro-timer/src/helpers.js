/** Any helper functions needed for this project **/

export function padTime(time){
    return time < 10 ? '0' + time : time;
}

export function msToMinutesSeconds(ms) {
    let min, sec;
    let remaining = ms;
    min = parseInt(remaining / 1000 / 60);
    remaining = (remaining / 1000 % 60);
    sec = parseInt(remaining);
    return { minutes: min, seconds: sec };
}