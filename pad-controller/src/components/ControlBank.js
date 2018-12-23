import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ControlBank extends Component {
    render() {
        return (
            <div className="control-panel">
                <div className="knob-panel">
                    <div className="row-1 knob-row">
                        <button className="knob-panel__knob">1</button>
                        <button className="knob-panel__knob">2</button>
                    </div>
                    <div className="row-2 knob-row">
                        <button className="knob-panel__knob">3</button>
                        <button className="knob-panel__knob">4</button>
                    </div>
                    <div className="row-3 knob-row">
                        <button className="knob-panel__knob">5</button>
                        <button className="knob-panel__knob">6</button>
                    </div>
                </div>
                <div className="button-panel">
                    <div className="row-1 button-row">
                        <button className="button-panel__button">CTRL BANK</button>
                        <button className="button-panel__button">PROG SELECT</button>
                        <button className="button-panel__button">PAD BANK</button>
                    </div>
                    <div className="row-2 button-row">
                        <button className="button-panel__button">PULL LEVEL</button>
                        <button className="button-panel__button">NR CONFIG</button>
                        <button className="button-panel__button">NOTE REPEAT</button>
                    </div>
                </div>
            </div>
        );
    }
}

ControlBank.propTypes = {

};

export default ControlBank;