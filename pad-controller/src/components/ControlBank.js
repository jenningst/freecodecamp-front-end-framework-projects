import React, { Component } from 'react';

class ControlBank extends Component {
    render() {
        return (
            <div className="control-panel">
                <div className="knob-panel">
                    <div className="knob-row-1 knob-row">
                        <div className="knob-panel__knob dial" />
                        <div className="knob-panel__knob dial" />
                    </div>
                    <div className="knob-row-2 knob-row">
                        <div className="knob-panel__knob dial" />
                        <div className="knob-panel__knob dial" />
                    </div>
                    <div className="knob-row-3 knob-row">
                        <div className="knob-panel__knob dial" />
                        <div className="knob-panel__knob dial" />
                    </div>
                </div>
                <div className="button-panel">
                    <div className="button-row-1 button-row">
                        <div className="button-container">
                            <button className="button-panel__button"/>
                            <p className="button-panel__label ctrl-bank">CTRL<br />BANK</p>
                        </div>
                        <div className="button-container">
                            <button className="button-panel__button"/>
                            <p className="button-panel__label prog-select">PROG<br />SELECT</p>
                        </div>
                        <div className="button-container">
                            <button className="button-panel__button"/>
                            <p className="button-panel__label pad-bank">PAD<br />BANK</p>
                        </div>
                    </div>
                    <div className="button-row-2 button-row">
                        <div className="button-container">
                            <button className="button-panel__button full-level__button"/>
                            <p className="button-panel__label full-level__label">FULL<br />LEVEL</p>
                        </div>
                        <div className="button-container">
                            <button className="button-panel__button nr-config__button"/>
                            <p className="button-panel__label nr-config__label">NR<br />CONFIG</p>
                        </div>
                        <div className="button-container">
                            <button className="button-panel__button note-repeat__button"/>
                            <p className="button-panel__label note-repeat__label">NOTE<br />REPEAT</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlBank;