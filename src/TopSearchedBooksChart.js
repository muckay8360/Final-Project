import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const TopSearchedBooksChart = ({ topSearchedBooks }) => {
    const data = {
        labels: topSearchedBooks.map(book => book.title),
        datasets: [
            {label: 'Number of Searches',
            data: topSearchedBooks.map(book => book.searchCount),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,

            
        },
    ],
    };
    
    return (
        <div>
            <h2>Top 10 Searched Books</h2>
            <Bar data={data} />
        </div>
    );
};

export default TopSearchedBooksChart;