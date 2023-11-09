import React from 'react';
import './BookDetails.css';
import { useParams } from 'react-router-dom';
import { sampleBooks } from '../../data/data';

const BookDetails = () => {
    const { id } = useParams();
    const book = sampleBooks.find(book => book.id === id);

    return (
        <div>
            <h1>Book Details</h1>
            <div className="book-details">
                <img src={book.coverImage} alt="Book Cover" className="book-cover" />
                <div className="book-info">
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Description: {book.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
