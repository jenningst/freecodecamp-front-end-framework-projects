import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pad from './Pad';

class PadBank extends Component {
    static propTypes = {
        pads: PropTypes.object
    }
    
    render() {
        return <div className="pad-panel">
            {Object.keys(this.props.pads).map(key => (
              <Pad
                key={key}
                index={key}
                details={this.props.pads[key]}
                loadDisplayText={this.props.loadDisplayText}
                handleKeyPress={this.props.handleKeyPress}
                lastPlayed={this.props.lastPlayed}
              />
            ))}
          </div>;
    }
}

export default PadBank;