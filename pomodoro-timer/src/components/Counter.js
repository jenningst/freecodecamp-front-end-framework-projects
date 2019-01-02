import React, { Component } from 'react';
import { bool, number } from 'prop-types';

Counter.propTypes = {
    toggleSession: bool,
    minutes: number,
    seconds: number
}

function Counter({ toggleSession, minutes, seconds }) {
    return (
        <div className="timer-counter">
            <div className="timer-display">
                <div id="timer-label">{toggleSession ? 'Session' : 'Break'}</div>
                <div id="time-left">{`${minutes}:${seconds}`}</div>
            </div>
        </div>
    );
}

export default Counter;