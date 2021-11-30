import React from "react";
import "./CommentCard.css";

const CommentCard = ({ author, comment }) => {
  return (
    <div className="comment_card__container">
      <span className="comment_card--author">{author}</span>
      <p className="comment_card--comment">{comment}</p>
    </div>
  );
};

export default CommentCard;
