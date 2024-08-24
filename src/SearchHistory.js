import React from 'react';
    const SearchHistory = ({ history })=> {
        return (
            <div>
                <h2>Search History</h2>
                {history.length === 0 ? (
                    <p> No Searches have been made. </p>
                ) : (
                    <ul>
                        {history.map((searchTerm, index) => (
                        <li key={index}>{searchTerm}</li>
                ))}
                </ul>
            )}
            </div>
        
        );
};
export default SearchHistory;