import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { sampleBooks } from "../../data/data";

import "./bookDetails.scss";

const BookDetails = () => {
  const { id } = useParams();

  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    const matchedBook = sampleBooks.find((book) => book.id == id);
    setBookDetails(matchedBook);
  }, []);

  return (
    <div className="list-container">
      <h1 className="heading">Book Details</h1>
      <div className="book-details">
        <img
          src={bookDetails?.coverImage}
          alt="Book Cover"
          className="image"
        />
        <div className="book-info">
          <h2>{bookDetails?.title}</h2>
          <p>Author: {bookDetails?.author}</p>
          <p>Genre: {bookDetails?.genre}</p>
          <p className="description">{bookDetails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
