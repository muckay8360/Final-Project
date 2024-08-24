import React, { useState } from 'react';
import './App.css';
import SearchHistory from './SearchHistory';
import SearchButton from './SearchButton';
import Dragon from './images/dragon.jpg';
import Ghost from './images/ghosts.jpg';
import Pirate from './images/pirates.jpg';
import Promises from './images/promises.jpg';
import Watcher from './images/watcher.jpg';
import Warrior from './images/warrior.jpg';
import Empress from './images/Empress.jpg';
import Swift from './images/swift.jpg';
import Freedom from './images/freedom.jpg';
import Rise from './images/rise.jpg';
import TopSearchedBooksChart from './TopSearchedBooksChart';

const booksDatabase = [
  { title: 'Dragon Dance', isbn: 9780056654123, author: 'Jack Brian', searchCount: 0, cover: Dragon},
  { title: 'Ghosts in the house', isbn: 9780056654124, author: 'Janet Brown', searchCount: 0, cover: Ghost},
  { title: 'The Lost Pirates', isbn: 9780056654120, author: 'Cane Williomson', searchCount: 0, cover: Pirate},
  { title: 'Broken Promises', isbn: 9780056654121, author: 'Kade William', searchCount: 0, cover: Promises},
  { title: 'The Watcher', isbn: 9780056654111, author: 'Jane Doe', searchCount: 0, cover: Watcher},
  { title: 'Warrior', isbn: 9780056654112, author: 'Gerry Winston', searchCount: 0, cover: Warrior},
  { title: 'Empress', isbn: 9780056654113, author: 'Gerry Winston', searchCount: 0, cover: Empress},
  { title: 'Swift', isbn: 9780056654114, author: 'Brian Tarry', searchCount: 0, cover: Swift},
  { title: 'Freedom Funds', isbn: 9780056654115, author: 'Sarah Finance', searchCount: 0, cover: Freedom},  
  { title: 'Rise', isbn: 9780056654116, author: 'Sarah Finance', searchCount: 0, cover: Rise}  
];
const App = () => {
  const [topSearchedBooks, setTopSearchedBooks] = useState([]);

  const [searchHistory, setSearchHistory] = useState([]);

  

  const [searchResults, setSearchResults] = useState([]);
 

  const [view, setView] = useState("search");
 
 
  const handleSearch = (searchTerm) => {
    

    const results = booksDatabase.filter(
      (book) =>
         book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(book.isbn).includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchHistory((prevHistory) => [...prevHistory, searchTerm]);
    setSearchResults(results)
      

    if (results.length > 0) {
      results.forEach((result) => updateTopSearchedBooks(result.title));
      console.log(`Found ${results.length} Matching Books`);
    }
      else{
        console.log("No Matching Books.")
      }
  
    };

   const updateTopSearchedBooks = (bookTitle) => {
     setTopSearchedBooks((prevTopSearchedBooks) => {
       const bookIndex = prevTopSearchedBooks.findIndex(
         (book) => book.title === bookTitle
       );
       if (bookIndex !== -1) {
         const updatedBook = {
           ...prevTopSearchedBooks[bookIndex],
           searchCount: prevTopSearchedBooks[bookIndex].searchCount + 1,

         };
         const updatedTopSearchedBooks = [
           ...prevTopSearchedBooks.slice(0, bookIndex),
           updatedBook,
           ...prevTopSearchedBooks.slice(bookIndex + 1),
         ];

         return updatedTopSearchedBooks.sort((a, b) => b.searchCount - a.searchCount);

         } else {

          const newTopSearchedBooks = [
            ...prevTopSearchedBooks,
            { title: bookTitle, searchCount: 1},
          ];
          return newTopSearchedBooks
            .sort((a,b ) => b.searchCount - a.searchCount)
            .slice(0, 10);
        }
      });
    };  




 return (
 <div>
   <h1>Book Collection</h1>
   <div>
   <SearchButton onSearch={handleSearch} searchResults={searchResults}></SearchButton>
 
 <button onClick={() =>setView("history")}>
  Search History</button>
 <button onClick={() =>setView("topSearchedBooks")}>
  Top 10 Searched Books</button>
 </div>
 <div>
 
  
 {view === "history" && <SearchHistory history={searchHistory} />}
   {view === "topSearchedBooks" && <TopSearchedBooksChart topSearchedBooks={topSearchedBooks} />}
    
 </div>
</div>
 );
};

 export default App;