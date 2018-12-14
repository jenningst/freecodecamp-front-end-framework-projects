import React from 'react';
//import PropTypes from 'prop-types';

class Quote extends React.Component {
    
    componentDidMount () {
        // load a quote if we're mounting this component for the first time
        //const quote = {this.props.loadQuote};
    }

    render() {
        return (
            <div id="quote-box" className="quote-box">
                <div id="text" className="text"/>
                <div id="author" className="author" />
                <button id="new-quote" className="new-quote" />
                <button id="tweet-quote" className="tweet-quote"></button>
            </div>
        );
    }
}

Quote.propTypes = {

};

export default Quote;