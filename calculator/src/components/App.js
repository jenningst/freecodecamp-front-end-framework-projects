import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttons } from '../button-data';

class App extends Component {
    
    state = {
        formula: '',
        currentInput: ''
    }

    render() {
        return (
            <div className="calculator">
                <div className="display-bank">
                    <div className="display-bank__formula-bar"></div>
                    <div id="display" className="display-bank__output"></div>
                </div>
                <div className="button-bank">
                    {buttons.map(item => 
                        <button 
                            id={item.id} 
                            className="button-bank__button btn btn-primary">
                                {item.value}
                        </button>)}
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;