import React, { Component } from 'react';
import Timer from './Timer';
import { formatDuration } from '../helpers';
import PropTypes from 'prop-types';

class App extends Component {
    state = {
        break: 2000,
        session: 2000,
        remainingTime: 10000,
        pause: false,
        toggleSession: true,
        toggleStart: true,
        timerId: ''
    }

    handleIncrement = (e) => {
        const stateTarget = e.currentTarget.id.split('-')[0];
        const incrementer = e.currentTarget.id.split('-')[1];
        let currentLength = this.state[stateTarget];
        const newLength = () => incrementer === 'increment' ? currentLength + 1000 : currentLength - 1000;

        if (newLength() >= 0 && newLength() <= 3599000) {
            this.setState({ [stateTarget] : newLength() });
        }
        // TODO: this must also update remainingTime
    }

    handleStartStop = (e) => {
        // switch our state
        this.setState({ toggleStart: !this.state.toggleStart });

        let timerId;
        const sessionOrBreak = this.state.toggleSession ? 'session' : 'break';
        if (this.state.toggleStart) {
            timerId = setInterval(() => {
                this.setState({ remainingTime: this.state.remainingTime-1000})
            }, 1000);
            this.setState({ timerId });

            if (this.state.remainingTime === 0){
                console.log('done!');
            }
        } else {
            clearInterval(this.state.timerId);
        }
    }

    handleSessionOrBreak = (e) => {
        this.setState({ toggleSession: !this.state.toggleSession });
    }

    handleReset = (e) => {
        this.setState({
            break: 2000,
            session: 2000,
            remainingTime: 2000,
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
                            <div id="break-length">{this.state.break}</div>
                            <button id="break-increment" onClick={this.handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className="session-controls">
                        <p id="session-label">Session Length</p>
                        <div className="sessionrementer">
                            <button id="session-decrement" onClick={this.handleIncrement}>-</button>
                            <div id="session-length">{this.state.session}</div>
                            <button id="session-increment" onClick={this.handleIncrement}>+</button>
                        </div>
                    </div>
                </div>
                <Timer 
                    toggleSession={this.state.toggleSession}
                    remainingTime={this.state.remainingTime}
                />
                <div className="timer-buttons">
                    <button id="start_stop" onClick={this.handleStartStop}>{this.state.toggleStart ? 'Start' : 'Stop'}</button>
                    <button id="reset" onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;