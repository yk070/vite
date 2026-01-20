import React from "react";
import look from "../style/look.jsx";
import BasicHalf from "./BasicHalf.jsx";

const Basic = () => {
  return (
    <div style={look.basic7}>
      <div style={look.basic8}>
        <BasicHalf basicProps="left" />
      </div>
      <div style={look.basic8}>
        <BasicHalf basicProps="right" />
      </div>
    </div>
  );
};

export default Basic;
