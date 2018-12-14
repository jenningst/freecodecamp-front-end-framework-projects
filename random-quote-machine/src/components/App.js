import React from 'react';
//import PropTypes from 'prop-types';
import Quote from './Quote';
import { getQuote } from '../helpers';

class App extends React.Component {
    state = {
        quote: "",
        author: ""
    }

    componentDidMount() {
        // initialize our quote upon mounting
        const quote = getQuote();
        this.setState({ quote: quote.quote, author: quote.author });
    }

    loadQuote = () => {
        const quote = getQuote();
        this.setState({ quote: quote.quote, author: quote.author });
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