import React from "react";
import "./GuideForm.css";

const GuideForm = ({
  pageTitle,
  title,
  author,
  publicationDate,
  imageUrl,
  text,
}) => {
  return (
    <div>
      <h1 className="title">{pageTitle}</h1>
      <form className="guide__form">
        <input
          type="text"
          placeholder="Título"
          className="input guide__form--input"
          value={title}
        />
        <input
          type="text"
          placeholder="Autor"
          className="input guide__form--input"
          value={author}
        />
        <input
          type="text"
          placeholder="Data da publicação"
          className="input guide__form--input"
          value={publicationDate}
        />
        <input
          type="text"
          placeholder="Imagem"
          className="input guide__form--input"
          value={imageUrl}
        />
        <textarea
          id="text"
          cols="30"
          rows="10"
          placeholder="Texto"
          className="input guide__form--textarea"
          value={text}
        ></textarea>
        <button type="submit" className="button guide__form--btn">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default GuideForm;
