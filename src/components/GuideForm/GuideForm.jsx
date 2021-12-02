import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";
import "./GuideForm.css";

const GuideForm = ({
  formType,
  pageTitle,
  id,
  title,
  author,
  publicationDate,
  imageUrl,
  text,
}) => {
  const [guideTitle, setGuideTitle] = useState("");
  const [guideAuthor, setGuideAuthor] = useState("");
  const [guideDate, setGuideDate] = useState("");
  const [guideImageUrl, setGuideImageUrl] = useState("");
  const [guideText, setGuideText] = useState("");
  const token = localStorage.getItem("authHeader");
  const history = useHistory();

  useEffect(() => {
    if (formType === "EDIT_GUIDE") {
      setGuideTitle(title);
      setGuideAuthor(author);
      setGuideDate(publicationDate);
      setGuideImageUrl(imageUrl);
      setGuideText(text);
    }
  }, [formType, title, author, publicationDate, imageUrl, text]);

  const handleNewGuide = (e) => {
    e.preventDefault();

    api
      .post(
        "/api/admin/guide",
        {
          title: guideTitle,
          author: guideAuthor,
          publicationDate: guideDate,
          imageUrl: guideImageUrl,
          text: guideText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then(() => {
        history.push("/roteiros");
      });
  };

  const handleEditGuide = (e) => {
    e.preventDefault();

    api
      .patch(
        `/api/admin/guide/${id}`,
        {
          title: guideTitle,
          author: guideAuthor,
          publicationDate: guideDate,
          imageUrl: guideImageUrl,
          text: guideText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then(() => {
        history.push(`/roteiro/${id}`);
      });
  };

  return (
    <div>
      <h1 className="title">{pageTitle}</h1>
      <form
        className="guide__form"
        onSubmit={formType === "NEW_GUIDE" ? handleNewGuide : handleEditGuide}
      >
        <input
          type="text"
          placeholder="Título"
          className="input guide__form--input"
          value={guideTitle}
          onChange={(e) => {
            setGuideTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Autor"
          className="input guide__form--input"
          value={guideAuthor}
          onChange={(e) => {
            setGuideAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Data da publicação"
          className="input guide__form--input"
          value={guideDate}
          onChange={(e) => {
            setGuideDate(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Imagem"
          className="input guide__form--input"
          value={guideImageUrl}
          onChange={(e) => {
            setGuideImageUrl(e.target.value);
          }}
        />
        <textarea
          id="text"
          cols="30"
          rows="10"
          placeholder="Texto"
          className="input guide__form--textarea"
          value={guideText}
          onChange={(e) => {
            setGuideText(e.target.value);
          }}
        ></textarea>
        <button type="submit" className="button guide__form--btn">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default GuideForm;
