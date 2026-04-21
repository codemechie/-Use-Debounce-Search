/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect} from 'react'

import './App.css'
import footballers from './Script1.js'
    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => { clearTimeout(handler) }
        }, [value, delay]);
        return debouncedValue
    }

export function FootballerSearch() {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        if (debouncedQuery) {
            const results = footballers.filter((footballer) =>
                footballer.toLowerCase().includes(debouncedQuery.toLowerCase()),
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [debouncedQuery]);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Footballer Search App</h1>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }} >
                 <input
                    style={{ padding: "0.5rem", width: "30%" }}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a footballer..."
                />
            </div>
            <div>
                {searchResults.map((footballer, index) => (
                    <div key={index}>{footballer}</div>
                ))}
            </div>
        </>
    );
}


