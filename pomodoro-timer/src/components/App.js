import React, { Component } from 'react';
import Timer from './Timer';
import { sessionTimer } from '../helpers';
import PropTypes from 'prop-types';

class App extends Component {
    state = {
        seconds: 0,
        minutes: 25,
        break: 5,
        session: 25,
        toggleSession: true,
        toggleStart: true,
        timerId: ''
    }

    handleIncrement = (e) => {
        const sessionOrBreak = e.currentTarget.id.split('-')[0];
        const incrementer = e.currentTarget.id.split('-')[1];
        let currentLength = this.state[sessionOrBreak];
        
        const newLength = () => incrementer === 'increment' ? currentLength + 1 : currentLength - 1;

        if (newLength() >= 0 && newLength() <= 3599000) {
            // update our length states
            this.setState((prevState) => ({
                [sessionOrBreak]: prevState[sessionOrBreak] = newLength()
            }));
            // update our countdown state to reflect the updated session
            if (sessionOrBreak === 'session') {            
                this.setState({ minutes: newLength() });
            }
        }
    }

    handleReset = (e) => {
        // stop the current timer
        clearInterval(this.state.timerId); // TODO: Broken

        this.setState({
            seconds: 0,
            minutes: 25,
            break: 5,
            session: 25,
            toggleSession: true,
            toggleStart: true,
            timerId: ''
        })
    }

    handleStartStop = (e) => {
        const startOrStop = this.state.toggleStart;
        if (startOrStop) { // session
            // toggle to stop
            this.setState({ toggleStart: !this.state.toggleStart });
            // create a timer to run our tick() function
            let timer = setInterval(this.tick, 1000);
            // update state to get the current timer id
            this.setState( { timerId: timer });
        } else { // break
            // stop the current timer
            clearInterval(this.state.timerId);
            // toggle to start
            this.setState({ toggleStart: !this.state.toggleStart });
        }
    }

    tick = () => {
        // initial run:
            // get our session and break lengths
            // get the current time
    }

    render() {
        return (
            <div className="timer">
                <div className="break-controls">
                    <p id="break-label">Break Length</p>
                    <div className="breakrementer">
                        <button id="break-decrement" onClick={this.handleIncrement}>-</button>
                        <div id="break-length">{this.state.break}</div>
                        <button id="break-increment" onClick={this.handleIncrement}>+</button>
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
                    toggleStart={this.state.toggleStart}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                />
                <div className="timer-controls">
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