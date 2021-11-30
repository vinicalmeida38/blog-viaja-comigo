import React from "react";
import "./Guide.css";
import CommentCard from "../../components/CommentCard/CommentCard";
import Header from "../../components/Header/Header";

const Guide = () => {
  const mockGuide = {
    title: "Viagem NY",
    author: "Vinícius Almeida",
    publicationDate: "29/11/2021",
    imageUrl: "https://cdn.britannica.com/s:575x450/61/75961-004-295F8958.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus justo, ullamcorper eu varius eget, lacinia accumsan ligula. Quisque condimentum diam sed purus condimentum, et bibendum nibh pretium. Nullam at arcu eget libero euismod ultrices ac fermentum sapien. Morbi congue risus at tristique sollicitudin. In suscipit aliquet aliquet. Mauris a eros iaculis, convallis velit sit amet, consequat ipsum. Morbi pharetra, libero non hendrerit semper, nibh magna tincidunt lectus, et mattis felis quam vel nisi. Praesent non risus tempor, vestibulum enim et, sodales sem. Etiam vulputate nisi nisi. Donec ut augue ultricies, sollicitudin massa vitae, tempor urna. Integer condimentum vulputate eros vitae bibendum.",
  };

  return (
    <>
      <Header />
      <div className="guide__info">
        <h1 className="title">{mockGuide.title}</h1>
        <p className="guide__info--publication_date">
          Postado por {mockGuide.author} em {mockGuide.publicationDate}
        </p>
        <img src={mockGuide.imageUrl} alt={mockGuide.title} width="650px" />
        <p className="guide__info--text">{mockGuide.text}</p>
      </div>
      <div className="guide__send-comment">
        <h2 className="">Deixe seu comentário</h2>
        <form className="guide__send-comment--form">
          <input type="text" placeholder="Nome" className="input" />
          <textarea
            id="comment"
            cols="30"
            rows="10"
            className="input"
            placeholder="Comentário"
          ></textarea>
          <button type="submit" className="button">
            Comentar
          </button>
        </form>
      </div>
      <div className="guide__comments">
        <h2>Comentários</h2>
        <CommentCard author="Gigi" comment="Adorei o roteiro!" />
      </div>
    </>
  );
};

export default Guide;
