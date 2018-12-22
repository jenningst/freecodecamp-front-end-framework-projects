import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
    static propTypes = {
        sound: PropTypes.string
    }

    setDisplay = () => {
        return { __html: this.props.sound };
    }
    
    render() {
        return (
            <div id="display" className="display" dangerouslySetInnerHTML={this.setDisplay()}>
            </div>);
                {/* <div className="display-bank">
                    <h2>{this.props.sound}</h2>
                </div>
                <div className="knob-bank"></div>
                <div className="button-bank"></div> */}
    }
}

export default Display;