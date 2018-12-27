import React, { Component } from 'react';
import { formatTime } from '../helpers';
import PropTypes from 'prop-types';

class App extends Component {
    state = {
        break: 300,
        session: 1500,
        remainingTime: 0,
        pause: false,
        toggleSession: true,
        toggleStart: true
    }

    handleIncrement = (e) => {
        const stateTarget = e.currentTarget.id.split('-')[0];
        const incrementer = e.currentTarget.id.split('-')[1];
        let currentLength = this.state[stateTarget];
        const newLength = () => incrementer === 'increment' ? currentLength + 60 : currentLength - 60;
        
        if (currentLength >= 60 && currentLength <= 3540) {
            this.setState({ [stateTarget] : newLength() });
        }
    }

    handleReset = (e) => {
        this.setState({
            break: 300,
            session: 1500,
            remainingTime: 0,
            pause: false,
            toggleSession: true,
            toggleStart: true
        })
    }

    render() {
        return (
            <div className="timer">
                <div className="ticker-bank"></div>
                <div className="timer-label">
                    <div className="break-controls">
                        <p id="break-label">Break Length</p>
                        <div className="breakrementer">
                            <button id="break-decrement" onClick={this.handleIncrement}>-</button>
                            <div id="break-length">{formatTime(this.state.break)}</div>
                            <button id="break-increment" onClick={this.handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className="session-controls">
                        <p id="session-label">Session Length</p>
                        <div className="sessionrementer">
                            <button id="session-decrement" onClick={this.handleIncrement}>-</button>
                            <div id="session-length">{formatTime(this.state.session)}</div>
                            <button id="session-increment" onClick={this.handleIncrement}>+</button>
                        </div>
                    </div>
                </div>
                <div className="timer-counter">
                    <p id="timer-label">{this.state.toggleSession ? 'Session' : 'Break'}</p>
                    <div id="time-left">{} <div/>
                </div>
                <div className="timer-buttons">
                    <button id="start_stop">{this.state.toggleStart ? 'Start' : 'Stop'}</button>
                    <button id="reset" onClick={this.handleReset}>Reset</button>
                </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;