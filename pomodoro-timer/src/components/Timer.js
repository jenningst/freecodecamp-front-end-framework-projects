import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatCountdownDisplay } from '../helpers';

class Timer extends Component {
    static propTypes = {
        toggleSession: PropTypes.bool,
        remainingTime: PropTypes.number
    }
    
    render() {
        return (
            <div className="timer-counter">
                <p id="timer-label">{this.props.toggleSession ? 'Session' : 'Break'}</p>
                <div id="time-left">{formatCountdownDisplay(this.props.remainingTime)}</div>
            </div>
        );
    }
}

Timer.propTypes = {

};

export default Timer;