import React from "react";
import GuideCard from "../../components/GuideCard/GuideCard";
import Header from "../../components/Header/Header";

const Guides = () => {
  return (
    <div>
      <Header />
      <h1 className="title">Roteiros</h1>
      <div className="content_page">
        <GuideCard
          id="01"
          image="https://cdn.britannica.com/s:575x450/61/75961-004-295F8958.jpg"
          title="Melhores lugares de Nova Iorque!"
          author="Vinicius Almeida"
          date="06/10/2021"
          article="Description"
        />
        <GuideCard
          id="02"
          image="https://cdn.britannica.com/s:575x450/61/75961-004-295F8958.jpg"
          title="Melhores lugares de Nova Iorque!"
          author="Vinicius Almeida"
          date="06/10/2021"
          article="Description"
        />
        <GuideCard
          id="03"
          image="https://cdn.britannica.com/s:575x450/61/75961-004-295F8958.jpg"
          title="Melhores lugares de Nova Iorque!"
          author="Vinicius Almeida"
          date="06/10/2021"
          article="Description"
        />
      </div>
    </div>
  );
};

export default Guides;
