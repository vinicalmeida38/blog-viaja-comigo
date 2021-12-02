import React from "react";
import GuideForm from "../../components/GuideForm/GuideForm";
import Header from "../../components/Header/Header";

const EditGuide = () => {
  const guideId = window.location.pathname.replace("/editar-roteiro/", "");

  return (
    <>
      <Header />
      <GuideForm
        formType="EDIT_GUIDE"
        id={guideId}
        pageTitle="Editar roteiro"
      />
    </>
  );
};

export default EditGuide;
