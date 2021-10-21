import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import authorImg from "../../assets/vinicius.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about content_page">
        <h1 className="title">Sobre o autor</h1>
        <img src={authorImg} alt="Foto do autor" width="320px" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus
          justo, ullamcorper eu varius eget, lacinia accumsan ligula. Quisque
          condimentum diam sed purus condimentum, et bibendum nibh pretium.
          Nullam at arcu eget libero euismod ultrices ac fermentum sapien. Morbi
          congue risus at tristique sollicitudin. In suscipit aliquet aliquet.
          Mauris a eros iaculis, convallis velit sit amet, consequat ipsum.
          Morbi pharetra, libero non hendrerit semper, nibh magna tincidunt
          lectus, et mattis felis quam vel nisi. Praesent non risus tempor,
          vestibulum enim et, sodales sem. Etiam vulputate nisi nisi. Donec ut
          augue ultricies, sollicitudin massa vitae, tempor urna. Integer
          condimentum vulputate eros vitae bibendum.
        </p>
      </div>
    </div>
  );
};

export default About;
