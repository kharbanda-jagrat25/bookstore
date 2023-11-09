import React, { useEffect, useState } from "react";

import Wallpaper from "../../assets/images/wallpaper.png";
import "./home.scss";
import { sampleBooks } from "../../data/data";

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    setFeaturedBooks(sampleBooks?.filter((book) => book.isFeatured));
  }, []);

  return (
    <>
      <img src={Wallpaper} alt="" width="100%" />
      <div className="featured-books-container">
        <h4 className="title">Features books</h4>
        <div className="book-list">
        {featuredBooks?.map(({ coverImage, id, description, title }) => (
            <div key={id} className="book">
              <img src={coverImage} alt={title} />
              <h4>{title}</h4>
              <h6>{description}</h6>
            </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Home;
