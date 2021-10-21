import React from "react";
import { Link } from "react-router-dom";
import "./GuideCard.css";

const GuideCard = ({ id, image, title, date, author, article }) => {
  return (
    <>
      <Link to={`/roteiro/${id}`}>
        <div className="guide_card">
          <div className="guide_card__img">
            <img src={image} alt={title} width="350px" />
          </div>
          <div className="guide_card__details">
            <h1>{title}</h1>
            <span>
              Postado por {author} em {date}
            </span>
            <p>{article}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GuideCard;
