import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <div>
                <Editor />
                <Previewer />
            </div>
        );
    }
}

App.propTypes = {

};

export default App;