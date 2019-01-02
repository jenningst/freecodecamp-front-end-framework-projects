import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Rewritten as a functional component
function Timer(props) {
    return (
        <div className="timer-counter">
            <div className="timer-display">
                <p id="timer-label">{props.toggleSession ? 'Session' : 'Break'}</p>
                <div id="time-left">{`${props.minutes} m ${props.seconds} s`}</div>
            </div>
        </div>
    );
}

// class Timer extends Component {    
//     render() {
//         const minutes = this.props.minutes;
//         const seconds = this.props.seconds;
//         return (
//             <div className="timer-counter">
//                 <div className="timer-display">
//                     <p id="timer-label">{this.props.toggleSession ? 'Session' : 'Break'}</p>
//                     <div id="time-left">{`${padTime(minutes)} m ${padTime(seconds)} s`}</div>
//                 </div>
//             </div>
//         );
//     }
// }

Timer.propTypes = {
    toggleSession: PropTypes.bool,
    toggleStart: PropTypes.bool,
    minutes: PropTypes.number,
    seconds: PropTypes.number
}

export default Timer;