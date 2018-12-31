/** Any helper functions needed for this project **/

export function sessionTimer(prevState, props) {
    // start the timer
    let timer = setInterval(() => {
        this.setState((prevState) => ({ 
            remainingTime: prevState.remainingTime - 1000 
        }));
    }, 1000);
    // update state with the timer id
    this.setState((prevState) => ({
        sessionTimerId: prevState = timer
    }));
}

export function formatDuration(milliseconds) {
    return milliseconds / 60 / 1000;
}

export function formatCounter(time){
    return time < 10 ? '0' + time : time;
}