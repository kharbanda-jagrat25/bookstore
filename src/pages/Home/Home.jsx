import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Bookstore</h1>
      <div className="featured-book">
        <img
          src="https://picsum.photos/200/300"
          alt="Featured Book Cover"
          className="featured-book-cover"
        />
        <div className="featured-book-details">
          <h2>Featured Book Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            justo vel justo varius volutpat. Integer sed faucibus dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;