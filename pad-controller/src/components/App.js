import React, { Component } from 'react';
import Display from './Display';
import PadBank from './PadBank';
import padSamples from '../pad-samples';

class App extends Component {
    
    state = {
        pads: {},
        sound: "",
        lastPlayed: ""
    }

    loadPadSamples =() => {
        this.setState({ pads: padSamples });
    }

    loadDisplayText = (text) => {
        this.setState({ sound: text });
    }

    componentWillMount() {
        document.addEventListener("keypress", event => {
            const keyName = event.key;
            if (typeof keyName == 'number') {
                this.setState({ lastPlayed : keyName })
            }
        });
    }

    componentDidMount() {
        this.setState({ pads: padSamples });
    }

    render() {
        return <div id="drum-machine">
            <Display sound={this.state.sound} />
            <PadBank pads={this.state.pads} loadDisplayText={this.loadDisplayText} lastPlayed={this.state.lastPlayed}/>
          </div>;
    }
}

export default App;