import React from "react";
import useCtx from "../context/useCtx.jsx";
import Basic from "./Basic.jsx";
import { ModButtonsObj } from "../obj/namedObj.js";
import AcButton from "./AcButton.jsx";
import Ac from "./Ac.jsx";
const AcButtons = () => {
  const ctx = useCtx();
  if (ctx.isWoAcBasic) return <Basic />;
  const ButtonObjs = ModButtonsObj[ctx.currentModAc];
  return (
    <>
      {ButtonObjs.map((ButtonObj) => (
        <AcButton key={ButtonObj.key} ButtonObj={ButtonObj} />
      ))}
    </>
  );
};

export default AcButtons;
