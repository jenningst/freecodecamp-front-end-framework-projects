import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from './Editor';
import Previewer from './Previewer';

class App extends Component {
    state = {
        text: ""
    }

    updateText = (updatedText) => {
        this.setState({
            text: updatedText
        })
    }

    render() {
        return <div className="wrapper">
            <Editor text={this.state.text} updateText={this.updateText} />
            <Previewer text={this.state.text} />
          </div>;
    }
}

export default App;