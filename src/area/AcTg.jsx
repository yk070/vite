import React from "react";
import look from "../style/look.jsx";
import Ac from "./Ac.jsx";
import Tg from "./Tg.jsx";
import MultiEles from "./MultiEles.jsx";
import Body from "./Body.jsx";

const AcTg = () => {
  return (
    <>
      <div style={look.Body7}>
        <div style={look.Body3}>
          <Ac />
        </div>
        <div style={look.Body8}>
          <div style={look.ac4}>
            <span style={look.multi2}>{"おすすめ一括設定"}</span>
          </div>
          <div style={look.ac5}>
            <MultiEles />
          </div>
        </div>
      </div>
      <div style={look.Body4}>
        <div style={look.Body5}>
          <Tg />
        </div>
      </div>
    </>
  );
};

export default AcTg;
