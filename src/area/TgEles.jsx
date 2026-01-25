import React from "react";
import useCtx from "../context/useCtx.jsx";
import { adjPosiIdObjObj } from "../obj/namedObj.js";
import TgEle from "./TgEle.jsx";
import Tg from "./Tg.jsx";

const TgEles = () => {
  const ctx = useCtx();
  return (
    <>
      {Object.entries(adjPosiIdObjObj[ctx.currentAdjTg]).map(
        ([posiId, styleObj]) => (
          <TgEle key={posiId} posiId={posiId} styleObj={styleObj} />
        ),
      )}
    </>
  );
};

export default TgEles;
