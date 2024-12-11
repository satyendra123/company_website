import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './Quote.css';

const Quote = () => {
    return (
        <div className="director-quote">
            <div className="quote-text">
                <div className="quote-content">
                    <h3>
                        <FontAwesomeIcon icon={faQuoteLeft} color='#007bff' /> &nbsp;
                        <span className='ml-2 quote-text-bold'>We don't just build products but a promise: we craft peace</span>
                    </h3>
                    <h3>
                        <span className='ml-2 mr-2 quote-text-bold'>of mind solutions, protecting what matters most to you.</span>
                        &nbsp; <FontAwesomeIcon icon={faQuoteRight} color='#007bff' />
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Quote;
