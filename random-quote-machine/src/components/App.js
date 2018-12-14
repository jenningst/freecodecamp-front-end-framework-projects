import React from 'react';
//import PropTypes from 'prop-types';
import Quote from './Quote';
import { getQuote, test } from '../helpers';

class App extends React.Component {
    state = {
        quote: "",
        author: ""
    }

    componentDidMount() {
        // initialize our quote upon mounting
        const q = getQuote();
        this.setState({ quote: q.quote, author: q.author });
    }

    loadQuote = () => {
        const q = getQuote();
        this.setState({ quote: q.quote, author: q.author });
    }

    render() {
        return <div className="wrapper">
            <Quote quote={this.state.quote} author={this.state.author} loadQuote={this.loadQuote}/>
          </div>;
    }
}

App.propTypes = {

};

export default App;