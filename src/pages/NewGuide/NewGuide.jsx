import React from "react";
import GuideForm from "../../components/GuideForm/GuideForm";
import Header from "../../components/Header/Header";

const NewGuide = () => {
  return (
    <>
      <Header />
      <GuideForm pageTitle="Novo roteiro" />
    </>
  );
};

export default NewGuide;
