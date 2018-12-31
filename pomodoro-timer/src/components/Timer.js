import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatCounter } from '../helpers';

class Timer extends Component {
    static propTypes = {
        toggleSession: PropTypes.bool,
        toggleStart: PropTypes.bool,
        minutes: PropTypes.number,
        seconds: PropTypes.number
    }
    
    render() {
        const minutes = this.props.minutes;
        const seconds = this.props.seconds;
        return (
            <div className="timer-counter">
                <div className="timer-display">
                    <p id="timer-label">{this.props.toggleSession ? 'Session' : 'Break'}</p>
                    <div id="time-left">{`${formatCounter(minutes)} m ${formatCounter(seconds)} s`}</div>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {

};

export default Timer;