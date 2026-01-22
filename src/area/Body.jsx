import React from "react";
import look from "../style/look.jsx";
import Article from "./Article.jsx";
import AcTg from "./AcTg.jsx";
import App from "./App.jsx";
const Body = () => {
  return (
    <>
      <div style={look.Body2}>
        <AcTg />
      </div>
      <div style={look.Body6}>
        <Article />
      </div>
    </>
  );
};

export default Body;
