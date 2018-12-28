/** Any helper functions needed for this project **/
export function formatDuration(milliseconds) {
    return milliseconds / 60 / 1000;
}

export function formatCountdownDisplay(milliseconds){
    let timeRemaining = milliseconds;
    let seconds = parseInt((timeRemaining / 1000) % 60);
    let minutes = parseInt((timeRemaining / (1000 * 60)) % 60);
    return `${minutes} m ${seconds} s`;
}