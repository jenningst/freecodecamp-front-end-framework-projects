import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from './Editor';
import Previewer from './Previewer';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Editor />
                <Previewer />
            </div>
        );
    }
}

App.propTypes = {

};

export default App;