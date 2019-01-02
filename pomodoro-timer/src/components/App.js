import React, { Component } from 'react';
import Timer from './Timer';
import { msToMinutesSeconds, padTime } from '../helpers';

class App extends Component {
    state = {
        seconds: 0,
        minutes: 25,
        break: 5,
        session: 25,
        toggleSession: true,
        toggleStart: false,
        timerId: '',
        sound:  './samples/foghorn-daniel_simon.mp3'
    }

    handleReset = (e) => {
        // stop the current timer
        clearInterval(this.state.timerId);

        const audio = document.getElementById('beep');
        audio.currentTime = 0;

        this.setState({
            seconds: 0,
            minutes: 25,
            break: 5,
            session: 25,
            toggleSession: true,
            toggleStart: false,
            timerId: '',
        })
    }

    handleIncrement = (e) => {
        const sessionOrBreak = e.currentTarget.id.split('-')[0];
        const incrementer = e.currentTarget.id.split('-')[1];
        let currentLength = this.state[sessionOrBreak];
        
        const newLength = () => incrementer === 'increment' ? currentLength + 1 : currentLength - 1;

        if (newLength() >= 1 && newLength() <= 60) {
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

    toggleTimer = () => {
        if(!this.state.toggleStart) {
            this.setState({
                toggleStart: true,
                timerId: setInterval(this.tick, 1000)
            });
        } else {
            this.setState({
                toggleStart: false,
                timerId: clearInterval(this.state.timerId)
            });
        }
    }

    tick = () => {
        let remainingMinutes = this.state.minutes;
        let remainingSeconds = this.state.seconds;
        // setup counters
        let remainingMilliseconds = (remainingMinutes * 60 * 1000) + (remainingSeconds * 1000) - 1000; // take off 1000 to avoid a delay
        
        if(this.state.minutes === 0 && this.state.seconds === 0){
            // play an alert sound
            const audio = document.getElementById('beep');
            audio.play();
            // toggle session/break
            this.setState({ toggleSession: !this.state.toggleSession });
            // reset minutes and seconds
            let next = this.state.toggleSession ? 'session' : 'break';
            // re-initialize the minutes in state for the next timer
            this.setState({
                minutes: this.state[next],
            })
        } else {
            // decrement our time and update state
            let { minutes: min, seconds: sec } = msToMinutesSeconds(remainingMilliseconds);
            this.setState((state, props) => ({
                minutes: state.minutes = min,
                seconds: state.seconds = sec
            }));
        }
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
                    minutes={padTime(this.state.minutes)}
                    seconds={padTime(this.state.seconds)}
                />
                <div className="timer-controls">
                    <button id="start_stop" onClick={this.toggleTimer}>{this.state.toggleStart ? 'Stop' : 'Start'}</button>
                    <button id="reset" onClick={this.handleReset}>Reset</button>
                </div>
                <audio id="beep" src={this.state.sound}/>
            </div>
        );
    }
}

export default App;