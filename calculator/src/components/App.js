import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttons } from '../button-data';

class App extends Component {
    
    state = {
        formula: '',
        input: ''
    }

    handleClick = (e) => {
        const id = e.currentTarget.id;
        const val = e.currentTarget.val;

        console.log(`id: ${id}`);

        switch(id) {
            case('clear'):
                this.setState({ formula: '', input: '' });
                break;
            case('equals'):
                let currentFormula = this.state.formula;
                let calculation = eval(currentFormula);
                this.setState({ formula: '', input: calculation });
                break;
            default:
                let currentInput = this.state.input;
                let updatedInput = currentInput.concat(e.currentTarget.value);
                this.setState({ formula: updatedInput, input : updatedInput })  ;
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

App.propTypes = {

};

export default App;