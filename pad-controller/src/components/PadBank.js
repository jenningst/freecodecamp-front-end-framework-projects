import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pad from './Pad';
import padSamples from '../pad-samples';

class PadBank extends Component {
    static propTypes = {
        setDisplayText: PropTypes.func,
        playSound: PropTypes.func
    }
    
    render() {
        return <div className="pad-panel">
            {padSamples.map(item => {
                return <Pad 
                    key={item.keyBinding}
                    index={item.keyBinding}
                    code={item.keyCode}
                    sound={item.clipSource}
                    desc={item.clipDesc}
                    func={item.altFunction}
                    setDisplayText={this.props.setDisplayText}
                    playSound={this.props.playSound}
                />
            })}
        </div>
    }
}

export default PadBank;