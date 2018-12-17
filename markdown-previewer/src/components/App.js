import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import { initialText } from '../helpers';


class App extends Component {
    state = {
        text: ""
    }

    componentDidMount() {
        // load initial markdown
        this.setState({ text: initialText })
    }

    updateText = (updatedText) => {
        this.setState({ text: updatedText })
    }

    render() {
        return <div className="wrapper">
            <Editor text={this.state.text} updateText={this.updateText} />
            <Previewer text={this.state.text} />
          </div>;
    }
}

export default App;