import React, { Component } from 'react';
import Display from './Display';
import PadBank from './PadBank';
import padSamples from '../pad-samples';

class App extends Component {
    
    state = {
        pads: {},
        sound: ""
    }

    loadPadSamples =() => {
        this.setState({ pads: padSamples });
    }

    loadDisplayText = (text) => {
        this.setState({ sound: text });
    }

    componentDidMount() {
        this.setState({ pads: padSamples });
    }

    render() {
        return <div id="drum-machine">
            <Display sound={this.state.sound} />
            <PadBank pads={this.state.pads} loadDisplayText={this.loadDisplayText} />
          </div>;
    }
}

export default App;