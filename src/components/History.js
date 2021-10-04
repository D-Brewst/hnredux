import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
    const history = useSelector(state => state.history)
    
    return (
        <div>
            <h3>Your Search History:</h3>
            <ul>
                {history.length ? history.map((term, index) => (
                    <li key={index}>{term.payload}</li>
                )) : <p>You have not made a search during this session.</p>}
            </ul>
        </div>
    )
}

export default History;
