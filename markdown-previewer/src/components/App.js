import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from './Editor';
import Previewer from './Previewer';

class App extends Component {
    state = {
        text: ""
    }

    updateText = (char) => {
        const updatedText = this.state.text + char;
        this.setState({
            text: updatedText
        })
    }

    render() {
        return <div className="wrapper">
            <Editor updateText={this.updateText} />
            <Previewer text={this.state.text} />
          </div>;
    }
}

App.propTypes = {

};

export default App;