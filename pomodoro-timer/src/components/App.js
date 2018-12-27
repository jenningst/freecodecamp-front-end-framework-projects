import React, { Component } from 'react';
import { formatTime } from '../helpers';
import PropTypes from 'prop-types';

class App extends Component {
    state = {
        breakLength: 300,
        sessionLength: 1500,
        remainingTime: 0,
        pause: false,
        toggleSession: true,
        toggleStart: true
    }

    render() {
        return (
            <div className="timer">
                <div className="ticker-bank"></div>
                <div className="timer-label">
                    <div className="break-controls">
                        <p id="break-label">Break Length</p>
                        <div className="breakrementer">
                            <div id="break-decrement" />
                            <div id="break-length">{formatTime(this.state.breakLength)}</div>
                            <div id="break-increment" />
                        </div>
                    </div>
                    <div className="session-controls">
                        <p id="session-label">Session Length</p>
                        <div className="sessionrementer">
                            <div id="session-decrement" />
                            <div id="session-length">{formatTime(this.state.sessionLength)}</div>
                            <div id="session-increment" />
                        </div>
                    </div>
                </div>
                <div className="timer-counter">
                    <p id="timer-label">{this.state.toggleSession ? 'Session' : 'Break'}</p>
                    <div id="time-left">{} <div/>
                </div>
                <div className="timer-buttons">
                    <button id="start_stop">{this.state.toggleStart ? 'Start' : 'Stop'}</button>
                    <button id="reset">Reset</button>
                </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;