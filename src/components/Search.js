import React, { useState } from 'react';
import { useGetArticlesQuery } from '../services/news';
import { addTerm } from '../services/historySlice';
import { useDispatch } from 'react-redux';

const Search = () => {
    const [term, setTerm] = useState(null);

    const dispatch = useDispatch();

    const {data, isFetching} = useGetArticlesQuery(term);

    const handleSubmit = (e) => {
        e.preventDefault();
        const word = e.target[0].value.trim();
        setTerm(word);
        if(word){
            dispatch(addTerm(word));
        }
    }

    const results = data?.hits;

    if(isFetching) return "Loading";

    console.log(results);

    return (
        <div>
            <h3>Enter a search term to see related news articles.</h3>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="term"
                placeholder="Search"
                defaultValue={term}
                />
                <div>
                    <button className="login__btn" type="submit">Submit</button>
                </div>
            </form>
            <p style={{display: term === "" ? 'block' : 'none' }}>Please enter a search term.</p>
            <div style={{display: term === "" ? 'none' : 'block' }}>
                <ul>
                    {results ? (
                        results.map((article) => (
                            <li style={{display: article.url && article.title ? 'block' : 'none' }} key={article.objectID}>
                                <a href={article.url}>{article.title}</a> 
                            </li>
                        ))
                    ) : (
                        <div></div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Search;