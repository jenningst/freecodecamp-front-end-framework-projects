import React, { Component } from 'react';
import Counter from './Counter';
import { msToMinutesSeconds, padTime } from '../helpers';
import { number } from 'prop-types';

class TimerContainer extends Component {
    state = {
        seconds: 5,
        minutes: 0,
        break: 5,
        session: 25,
        toggleSession: true,
        toggleStart: false,
        timerId: '',
        sound:  './samples/foghorn-daniel_simon.mp3'
    }

    static propTypes = {
        incrementer: number
    }

    static defaultProps = {
        incrementer: 1000
    }

    handleReset = (e) => {
        // stop the current timer
        clearInterval(this.state.timerId);

        const audio = document.getElementById('beep');
        audio.pause();
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
            this.setState((prevState, props) => ({
                [sessionOrBreak]: prevState[sessionOrBreak] = newLength()
            }));
            // update our countdown state to reflect the updated session
            if (sessionOrBreak === 'session') {            
                // this.setState({ minutes: newLength() });
                this.setState((prevState, props) => ({ minutes: newLength() })); // refactored setState
            }
        }
    }

    toggleTimer = () => {
        if(!this.state.toggleStart) {
            this.setState((prevState, props) => ({
                toggleStart: !prevState.toggleStart,
                timerId: setInterval(this.tick, 1000)
            }));
        } else {
            this.setState((prevState, props) => ({
                toggleStart: !prevState.toggleStart,
                timerId: clearInterval(prevState.timerId)
            }));
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
            audio.pause();
            audio.currentTime = 0;
            audio.play();
            // toggle session/break
            // this.setState({ toggleSession: !this.state.toggleSession });
            this.setState((prevState, props) => ({ toggleSession: !prevState.toggleSession})); // refactored setState
            // get the next timer type: break or session
            let next = this.state.toggleSession ? 'session' : 'break';
            // re-initialize the minutes in state for the next timer
            // this.setState({ minutes: this.state[next] })
            this.setState((prevState, props) => ({ minutes: prevState[next] })); // refactored setState
        } else {
            // decrement our time and update state
            let { minutes: min, seconds: sec } = msToMinutesSeconds(remainingMilliseconds);
            this.setState((prevState, props) => ({
                minutes: prevState.minutes = min,
                seconds: prevState.seconds = sec
            })); // refactored; eliminated props
        }
    }

    render() {
        return (
            <div className="timer">
                <div className="controls">
                    <div className="break-controls controls__bank">
                        <p id="break-label">Break Length</p>
                        <div className="increment-decrement breakrementer">
                            <button id="break-decrement" className="decrement" onClick={this.handleIncrement}>-</button>
                            <div id="break-length" className="control-length">{this.state.break}</div>
                            <button id="break-increment" className="increment" onClick={this.handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className="session-controls controls__bank">
                        <p id="session-label">Session Length</p>
                        <div className="increment-decrement sessionrementer">
                            <button id="session-decrement" className="decrement" onClick={this.handleIncrement}>-</button>
                            <div id="session-length" className="control-length">{this.state.session}</div>
                            <button id="session-increment" className="increment" onClick={this.handleIncrement}>+</button>
                        </div>
                    </div>
                </div>
                <Counter 
                    toggleSession={this.state.toggleSession}
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

export default TimerContainer;