import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
    static propTypes = {
        sound: PropTypes.string
    }
    
    render() {
        return (
            <div id="display" className="control-panel">
                <div className="display-bank">
                    <h2>{this.props.sound}</h2>
                </div>
                <div className="knob-bank"></div>
                <div className="button-bank"></div>
            </div>
        );
    }
}

export default Display;