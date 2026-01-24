import React from "react";
import useCtx from "../context/useCtx.jsx";
import { ModButtonsObj } from "../obj/namedObj.js";
import TgButton from "./TgButton.jsx";
import Tg from "./Tg.jsx";

const TgButtons = () => {
  const ctx = useCtx();
  return (
    <>
      {(ModButtonsObj[ctx.currentModTg] || []).map((buttonObj) => (
        <TgButton key={buttonObj.key} buttonObj={buttonObj} />
      ))}
    </>
  );
};

export default TgButtons;
