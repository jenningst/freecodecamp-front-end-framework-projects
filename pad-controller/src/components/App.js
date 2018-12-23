import React, { Component } from 'react';
import Display from './Display';
import PadBank from './PadBank';
import padSamples from '../pad-samples';

class App extends Component {
    
    state = {
        pads: {},
        sound: "",
    }

    setDisplayText = (key) => {
        let keyIndex = key.toUpperCase();
        this.setState({ sound: padSamples[`pad${keyIndex}`].clipDesc})
    }

    playSound = (key) => {
        let keyIndex = key.toUpperCase();
        this.audio = new Audio(padSamples[`pad${keyIndex}`].clipSource)
        this.audio.currentTime = 0;
        this.audio.play();
    }

    handleKeyPress = (e) => {
        let key = e.key.toLowerCase();
        const validKeys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
        if (validKeys.indexOf(key) > -1) {
            this.playSound(key.toUpperCase());
            this.setDisplayText(key.toUpperCase());
        }
    }

    componentDidMount() {
        this.setState({ pads: padSamples });
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        return <div id="drum-machine">
            <Display sound={this.state.sound} />
            <PadBank 
                pads={this.state.pads} 
                handleKeyPress={this.handleKeyPress} 
                setDisplayText={this.setDisplayText}
                playSound={this.playSound}
            />
          </div>;
    }
}

export default App;