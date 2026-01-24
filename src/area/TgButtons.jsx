import React from "react";
import useCtx from "../context/useCtx.jsx";
import { indexKeyObjObj } from "../obj/namedObj.js";
import TgButton from "./TgButton.jsx";
import Tg from "./Tg.jsx";

const TgButtons = () => {
  const ctx = useCtx();
  return (
    <>
      {Object.entries(indexKeyObjObj[ctx.currentModTg]).map(
        ([preKey, styleObj]) => (
          <TgButton key={preKey} preKey={preKey} styleObj={styleObj} />
        ),
      )}
    </>
  );
};

export default TgButtons;
