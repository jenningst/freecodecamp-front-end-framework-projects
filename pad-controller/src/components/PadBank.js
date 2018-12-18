import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pad from './Pad';

class PadBank extends Component {
    render() {
        return <div className="pad-panel">
            {Object.keys(this.props.pads).map(key => (
              <Pad
                key={key}
                index={key}
                pad={this.props.pads[key]}
                loadDisplayText={this.loadDisplayText}
              />
            ))}
          </div>;
    }
}

PadBank.propTypes = {

};

export default PadBank;