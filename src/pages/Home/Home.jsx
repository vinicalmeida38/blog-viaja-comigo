import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import GuideCard from "../../components/GuideCard/GuideCard";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="home__content content_page">
        <h1 className="title">Descomplicando suas futuras viagens</h1>
        <h3>Últimas postagens</h3>
        <div>
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
      </section>
    </div>
  );
};

export default Home;
