import React, { Component } from 'react';
import Display from './Display';
import PadBank from './PadBank';
import ControlBank from './ControlBank';

class App extends Component {
    state = {
        sound: "Waiting for sound...",
    }

    setDisplayText = (sound) => {
        this.setState({ sound });
    }

    playSound = (key) => {
        const audio = document.getElementById(key);
        audio.currentTime = 0;
        audio.play();
    }

    render() {
        return <div id="drum-machine">
            <div className="all-controls">
                <Display sound={this.state.sound} />
                <ControlBank />
                <PadBank
                    setDisplayText={this.setDisplayText}
                    playSound={this.playSound}
                />
            </div>
          </div>;
    }
}

export default App;