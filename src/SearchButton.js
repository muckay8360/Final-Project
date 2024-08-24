import React, { useState } from 'react';
import './App.css';

const SearchButton  = ({onSearch, searchResults }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <input 
                type="text" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, ISBN, or author."
        />
        <button onClick={handleSearchClick}>Search</button>
         <div>
             {searchResults.length > 0 && (
            <ul>
            {searchResults.map((book, index) => (
         
             <li key ={index} style={{ fontWeight: 'bold', marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
             <img src={book.cover} alt={`${book.title} cover`} style={{ width: '50px', height: '75px', marginRight: '10px' }} />
             {book.title} by {book.author} - {book.isbn}
             </li>
             ))}
             </ul>)}
         </div>
         </div>
    );
};

export default SearchButton;