import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GuideCard from "../../components/GuideCard/GuideCard";
import Header from "../../components/Header/Header";
import api from "../../services/api";
import "./GuideList.css";

const GuideList = () => {
  const [guideList, setGuideList] = useState([]);
  const [hasPermission, setHasPermission] = useState(false);
  const token = localStorage.getItem("authHeader");

  useEffect(() => {
    if (token !== null) {
      api.get(`/auth/verify/${token.replace("Bearer ", "")}`).then(() => {
        setHasPermission(true);
      });
    }

    api.get("/api/guides").then((res) => {
      setGuideList(res.data.guides);
    });
  }, [token]);

  const newGuideButton = () => {
    return (
      <div className="guide_list__new-guide">
        <Link to="/novo-roteiro">
          <button className="button guide_list__new-guide--btn">
            Novo roteiro
          </button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <h1 className="title">Roteiros</h1>
      {hasPermission ? newGuideButton() : ""}
      <div className="content_page">
        {guideList.map((guide) => {
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
    </div>
  );
};

export default GuideList;
