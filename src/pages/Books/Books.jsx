import React, { useState, useEffect } from 'react';
import './Books.css';
import { sampleBooks } from '../../data/data';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS } from '../../constants/constants';

const Books = () => {
    const navigate = useNavigate();

    const handleBookClick = book => {
        navigate('/' + CONSTANTS.BOOKS + '/' + book.id, {
            state: {
                book
            }
        });
    }

    return (
        <div>
            <h1>Books</h1>
            <div className="book-list">
                {sampleBooks.map((book) => (
                    <div key={book.id} className="book-card" onClick={() => handleBookClick(book)}>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;