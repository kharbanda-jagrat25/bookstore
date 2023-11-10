import React from "react";

import "./card.scss";

const Card = ({
  coverImage,
  name,
  subName,
  onClick,
  dynamicContent,
  className,
  style,
  ...rest
}) => {
  return (
    <div
      onClick={() => onClick({ coverImage, name, ...rest })}
      className={`${className ?? ''} card`}
      style={style ?? {}}
    >
      <img className="image" src={coverImage} alt={name} />
      <h5 className="name">{name}</h5>
      <h6 className="sub-name">{subName}</h6>
      {dynamicContent}
    </div>
  );
};

export default Card;
