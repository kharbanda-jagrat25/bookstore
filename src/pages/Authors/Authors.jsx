import React from "react";

import Card from "../../components/Card/Card";
import { sampleAuthors } from "../../data/authorData";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  const navigate = useNavigate();

  const onAuthorClick = (authorName) => {
    navigate(`/books?author=${authorName}`);
  }

  return (
    <div className="list-container">
      <div className="list">
        {sampleAuthors?.map((author) => (
          <Card
            {...author}
            onClick={() => onAuthorClick(author.name)}
            key={author.id}
            subName={`${author?.books?.length} books`}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Authors;
