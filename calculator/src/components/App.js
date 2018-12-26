import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttons } from '../button-data';

class App extends Component {
    
    state = {
        formula: '',
        lastCharacter: '',
        input: '0'
    }

    handleClick = (e) => {
        const id = e.currentTarget.id;
        const val = e.currentTarget.value;
        
        switch(id) {
            // clear was clicked; initialize everything
            case('clear'):
                this.setState({ formula: '', lastCharacter: '', input: '0' });
                break;
            // equals was clicked
            case('equals'):
                let currentFormula = this.state.formula;
                let calculation = eval(currentFormula);
                this.setState({ formula: '', lastCharacter: val, input: calculation });
                break;
            default:
                // clear the initial zero
                if (this.state.input === '0') {
                    this.setState({ formula: val, lastCharacter: val, input: val});
                } 
                // default
                else {
                    let currentInput = this.state.input;
                    console.log(`currentInput = ${currentInput}`);
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