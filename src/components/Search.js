import React, { useState } from 'react';
import { useGetArticlesQuery } from '../services/news';

const Search = () => {
    const [term, setTerm] = useState(null);

    const {data, isFetching} = useGetArticlesQuery(term);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        setTerm(e.target[0].value);
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
            <div>
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