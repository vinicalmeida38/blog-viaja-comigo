import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./Home.css";
import Header from "../../components/Header/Header";
import GuideCard from "../../components/GuideCard/GuideCard";

const Home = () => {
  const [lastGuides, setLastGuides] = useState([]);

  useEffect(() => {
    api.get("/api/guides?homePage=true").then((res) => {
      setLastGuides(res.data.guides);
    });
  }, []);

  return (
    <div>
      <Header />
      <section className="home__content content_page">
        <h1 className="title">Descomplicando suas futuras viagens</h1>
        <h3>Últimas postagens</h3>
        <div>
          {lastGuides.map((guide) => {
            return (
              <GuideCard
                key={guide._id}
                id={guide._id}
                image={guide.imageUrl}
                title={guide.title}
                author={guide.author}
                publicationDate={guide.publicationDate}
                text={guide.text}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
