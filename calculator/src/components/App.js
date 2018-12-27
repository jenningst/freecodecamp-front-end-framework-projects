import React, { Component } from 'react';
import { buttons } from '../button-data';
var safeEval = require('safe-eval');

class App extends Component {

    state = {
        formula: '',
        lastCharacter: '',
        decimalInSubstring: false,
        input: '0'
    }

    handleClick = (e) => {
        // debugger;
        const id = e.currentTarget.id;
        const val = e.currentTarget.value;
        // console.log(`id: ${id}`);
        // console.log(`val: ${val}`);
        
        switch(id) {
            case('clear'):
                // clear was clicked: initialize everything
                this.setState({ formula: '', lastCharacter: '', decimalInSubstring: false, input: '0' });
                break;
            case('equals'):
            // equals was clicked: reinitialize formula, update input, update lastCharacter
                let currentFormula = this.state.formula;
                let calculation = safeEval(currentFormula);
                this.setState({ formula: '', lastCharacter: val, input: calculation });
                break;
            default:
                const operators = ['+', '-', '*', '/'];
            
                // calculator is initialized; overwrite state
                if (this.state.input === '0') {
                    // clear the initial zero: overwrite 0 state, update formula and lastCharacter
                    this.setState({ formula: val, lastCharacter: val, input: val});
                    break;
                }

                // case for operator
                if (operators.includes(val)) {
                    if (operators.includes(this.state.lastCharacter)) {
                        // prohibit subsequent operator
                        break;
                    } else {
                        // reset state because user is inputting a new number
                        this.setState({ decimalInSubstring: false });
                    }
                }

                // case for decimal
                if (val === '.') {
                    if (this.state.decimalInSubstring === true) {
                        // prohibit additional decimal in the same number
                        break;
                    } else {
                        this.setState({ decimalInSubstring: true });
                    }
                }

                 // default catch all
                let currentInput = this.state.input;
                let updatedInput = currentInput.toString().concat(val);
                this.setState({ formula: updatedInput, lastCharacter: val, input: updatedInput });
        }
    }

    render() {
        return (
            <div className="calculator">
                <div className="display-bank">
                    <div className="display-bank__last">
                        {this.state.lastCharacter}
                    </div>
                    <div className="display-bank__formula-bar">
                        {this.state.formula}
                    </div>
                    <div id="display" className="display-bank__output">
                        {this.state.input}
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

export default App;