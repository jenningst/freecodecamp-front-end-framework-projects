import React, { Component } from 'react';
import Timer from './Timer';
import { msToMinutesSeconds } from '../helpers';

class App extends Component {
    state = {
        seconds: 5,
        minutes: 0,
        break: 1,
        session: 2,
        toggleSession: true,
        toggleStart: true,
        timerId: ''
    }

    handleReset = (e) => {
        // stop the current timer
        clearInterval(this.state.timerId); // TODO: Broken

        this.setState({
            seconds: 5,
            minutes: 0,
            break: 1,
            session: 2,
            toggleSession: true,
            toggleStart: true,
            timerId: ''
        })
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

    handleStartStop = (e) => {
        const startOrStop = this.state.toggleStart;
        const sessionOrBreak = this.state.toggleSession;
        if (startOrStop) {
            // toggle to stop
            this.setState({ toggleStart: !this.state.toggleStart });
            // execute our tick() method
            this.tick(sessionOrBreak);
        } else {
            // stop the current timer
            clearInterval(this.state.timerId);
            // toggle to start
            this.setState({ toggleStart: !this.state.toggleStart });
        }
    }

    resetSessionOrBreak = (sessionOrBreak) => {
        return sessionOrBreak === 'session' ? this.state.session : this.state.break;
    }

    tick = (sessionOrBreak) => {
        // get our current time
        let remainingMinutes = this.state.minutes;
        let remainingSeconds = this.state.seconds;
        // setup counters
        let remainingMilliseconds = (remainingMinutes * 60 * 1000) + (remainingSeconds * 1000) - 1000; // take off 1000 to avoid a delay
        let counter = 0;
        
        // run the timer
        let timer = setInterval(() => {
            // set our timer id
            this.setState({ timerId: timer });
            // update state with the remaining minutes and sexonds
            let { minutes: min, seconds: sec } = msToMinutesSeconds(remainingMilliseconds);
            this.setState((state, props) => ({
                minutes: state.minutes = min,
                seconds: state.seconds = sec
            }));
            // increment and decrement our counters
            remainingMilliseconds -= 1000;
            counter += 1000;

            if (remainingMilliseconds < 0) {
                // current session or break has expired; switch to the other
                this.setState({ toggleSession: !this.state.toggleSession});
                let next = this.state.toggleSession ? 'session' : 'break';
                // reset the minutes in state for the next timer
                this.setState({
                    minutes: this.state[next],
                })
                // stop and clear the current timer from state
                clearInterval(this.state.timerId);
                this.setState({ timerId: '' });
                // start a new timer
                this.tick(next);
            }
        }, 1000);
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

export default App;