import React, { useState, useEffect } from 'react';
import './Authors.css';

const Authors = () => {
    // Sample author data for demonstration
    const sampleAuthors = [
        {
            id: 1,
            name: 'Author 1',
            books: ['Book 1', 'Book 2'],
        },
        {
            id: 2,
            name: 'Author 2',
            books: ['Book 3', 'Book 4'],
        },
    ];

    return (
        <div>
            <h1>Authors</h1>
            <div className="author-list">
                {sampleAuthors.map((author) => (
                    <div key={author.id} className="author-card">
                        <h2>{author.name}</h2>
                        <p>Books by this author:</p>
                        <ul>
                            {author.books.map((book, index) => (
                                <li key={index}>{book}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Authors;