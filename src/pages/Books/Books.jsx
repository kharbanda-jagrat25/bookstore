import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { sampleBooks } from "../../data/data";

import "./books.scss";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const Books = () => {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState(sampleBooks);
  const [updateBooks, setUpdateBooks] = useState(false);
  const isFirstRender = useRef(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const author = queryParams.get("author");
    if (author) setSearchText(author);
    queryParams.delete("author");
    navigate({
      search: '',
    });
  }, []);

  useEffect(() => {
    let delayDebounceFn;
    if (isFirstRender.current) isFirstRender.current = false;
    else if (searchText === '') setBooks(sampleBooks);
    else {
      delayDebounceFn = setTimeout(() => {
        const filteredBooks = sampleBooks.filter(b => b.author.toLowerCase().includes(searchText.toLowerCase()) || b.genre.toLowerCase().includes(searchText.toLowerCase()));
        setBooks(filteredBooks);
      }, 500);
    }
    if (updateBooks) setUpdateBooks(false);
    return () => clearTimeout(delayDebounceFn);
  }, [searchText, updateBooks]);

  const handleBookClick = (book) => {
    navigate(`/book/${book.id}`, {
      state: {
        book,
      },
    });
  };

  const onSearch = text => setSearchText(text);

  const addToCart = (e, book) => {
    e.stopPropagation();
    e.preventDefault();
    book.isAddedToCart = true;
    setUpdateBooks(true);
  }

  return (
    <div className="list-container">
      <div className="sorting">
        <h1>Filter by</h1>
        <input
          type="text"
          value={searchText}
          onChange={e => onSearch(e.target.value)}
          placeholder="Search by author or genre"
        />
      </div>
      <div className="list">
        {!books.length ? (
          <div className="no-data-found">No books found with "{searchText}"</div>
        ) : books.map((book) => (
          <Card
            {...book}
            onClick={handleBookClick}
            key={book.id}
            className="book"
            name={book.title}
            subName={`${book.genre} book by ${book.author}`}
            dynamicContent={
              <Button
                className={book.isAddedToCart ? "add-to-cart-btn disabled" : "add-to-cart-btn"}
                type="add-to-cart"
                name={book.isAddedToCart ? "Added to Cart" : "Add to Cart"}
                onClick={(e) => addToCart(e, book)}
                disable={book.isAddedToCart}
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
