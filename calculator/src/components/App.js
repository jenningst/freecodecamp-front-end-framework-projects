import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttons } from '../button-data';

class App extends Component {
    
    state = {
        formula: '',
        lastCharacter: '',
        decimalInSubstring: false,
        input: '0'
    }

    handleClick = (e) => {
        const id = e.currentTarget.id;
        const val = e.currentTarget.value;
        
        switch(id) {
            // clear was clicked: initialize everything
            case('clear'):
                this.setState({ formula: '', lastCharacter: '', input: '0' });
                break;
            // equals was clicked: reinitialize formula, update input, update lastCharacter
            case('equals'):
                let currentFormula = this.state.formula;
                let calculation = eval(currentFormula);
                this.setState({ formula: '', lastCharacter: val, input: calculation });
                break;
            default:
                const operators = ['+', '-', '*', '/'];
            
                // clear the initial zero: overwrite 0 state, update formula and lastCharacter
                if (this.state.input === '0') {
                    this.setState({ formula: val, lastCharacter: val, input: val});
                } 
                // prohibit multiple subsequent operators
                else if (operators.includes(val) && operators.includes(this.state.lastCharacter)) {
                    // TODO: Need the ability to reset decimalInString state for valid operator input
                }
                 // default block
                else {
                    if (this.state.decimalInSubstring === true && val === '.') {
                        // don't allow additional decimal
                    }
                    let currentInput = this.state.input;
                    // console.log(`currentInput = ${currentInput}`);
                    let updatedInput = currentInput.toString().concat(val);
                    this.setState({ formula: updatedInput, lastCharacter: val, input: updatedInput });
                }
        }
    }

    componentWillMount() {
        window.addEventListener('click', this.handleClick);
    }

    componentWillMount() {
        window.removeEventListener('click', this.handleClick);
    }

    render() {
        return (
            <div className="calculator">
                <div className="display-bank">
                    <div className="display-bank__last">
                        <span>Last Character:</span> {this.state.lastCharacter}
                    </div>
                    <div className="display-bank__formula-bar">
                        <span>Form:</span> {this.state.formula}
                    </div>
                    <div id="display" className="display-bank__output">
                        <span>Input:</span> {this.state.input}
                    </div>
                </div>
                <div className="button-bank">
                    {buttons.map(item => 
                        <button 
                            id={item.id}
                            key={item.id}
                            value={item.value}
                            className="button-bank__button btn btn-primary"
                            onClick={this.handleClick}
                        >
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