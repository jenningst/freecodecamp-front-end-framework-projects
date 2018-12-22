import React, { Component } from 'react';
import Display from './Display';
import PadBank from './PadBank';
import padSamples from '../pad-samples';

class App extends Component {
    
    state = {
        pads: {},
        sound: "",
        hotkey: "",
        lastPlayed: ""
    }

    loadPadSamples =() => {
        this.setState({ pads: padSamples });
    }

    loadDisplayText = (text) => {
        this.setState({ sound: text });
    }

    playSound = (audio) => {
        this.audio.play();
    }

    handleKeyPress = (e) => {
        if (e.which === 49) {
            let padSource = `pad${e.key}`
            this.audio = new Audio(padSamples[padSource].clipSource);
            this.playSound(this.audio);
        } else if (e.which === 50) {
            console.log(2);   
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
            <PadBank pads={this.state.pads} loadDisplayText={this.loadDisplayText} lastPlayed={this.state.lastPlayed}/>
          </div>;
    }
}

export default App;