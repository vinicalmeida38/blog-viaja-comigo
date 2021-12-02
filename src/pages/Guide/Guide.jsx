import React, { useEffect, useState } from "react";
import "./Guide.css";
import CommentCard from "../../components/CommentCard/CommentCard";
import Header from "../../components/Header/Header";
import api from "../../services/api";
import { Link, useHistory } from "react-router-dom";

const Guide = () => {
  const [guide, setGuide] = useState({});
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const guideId = window.location.pathname.replace("/roteiro/", "");
  const token = localStorage.getItem("authHeader");
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      api.get(`/auth/verify/${token.replace("Bearer ", "")}`).then(() => {
        setHasPermission(true);
      });
    }

    api.get(`/api/guide/${guideId}`).then((res) => {
      setGuide(res.data.guide);
    });
  }, [guideId, token]);

  const handleComment = (e) => {
    e.preventDefault();
    api
      .post(`/api/comment/${guideId}`, {
        name: name,
        comment: comment,
      })
      .then(() => {
        setName("");
        setComment("");
        api.get(`/api/guide/${guideId}`).then((res) => {
          setGuide(res.data.guide);
        });
      });
  };

  const handleDeleteGuide = () => {
    api
      .delete(`/api/admin/guide/${guideId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        history.push("/roteiros");
      });
  };

  const adminOptions = () => {
    return (
      <div className="guide__admin--options">
        <Link to={`/editar-roteiro/${guideId}`}>
          <button className="button guide__admin--edit">Editar</button>
        </Link>
        <button
          className="button guide__admin--remove"
          onClick={handleDeleteGuide}
        >
          Remover
        </button>
      </div>
    );
  };

  return (
    <>
      <Header />
      {hasPermission ? adminOptions() : ""}
      <div className="guide__info">
        <h1 className="title guide__info--title">{guide.title}</h1>
        <p className="guide__info--publication_date">
          Postado por {guide.author} em {guide.publicationDate}
        </p>
        <img src={guide.imageUrl} alt={guide.title} width="650px" />
        <p className="guide__info--text">{guide.text}</p>
      </div>
      <div className="guide__send-comment">
        <h2 className="">Deixe seu comentário</h2>
        <form className="guide__send-comment--form" onSubmit={handleComment}>
          <input
            type="text"
            placeholder="Nome"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            id="comment"
            cols="30"
            rows="10"
            className="input"
            placeholder="Comentário"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit" className="button">
            Comentar
          </button>
        </form>
      </div>
      <div className="guide__comments">
        <h2>Comentários</h2>
        <span>{guide.comments && guide.comments.length} comentário(s)</span>
        {guide.comments &&
          guide.comments.map((comment) => {
            return (
              <CommentCard
                key={comment._id}
                author={comment.name}
                comment={comment.comment}
              />
            );
          })}
      </div>
    </>
  );
};

export default Guide;
