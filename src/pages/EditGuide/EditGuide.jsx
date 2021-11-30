import React from "react";
import GuideForm from "../../components/GuideForm/GuideForm";
import Header from "../../components/Header/Header";

const EditGuide = () => {
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
      <GuideForm
        pageTitle="Editar roteiro"
        title={mockGuide.title}
        author={mockGuide.author}
        publicationDate={mockGuide.publicationDate}
        imageUrl={mockGuide.imageUrl}
        text={mockGuide.text}
      />
    </>
  );
};

export default EditGuide;
