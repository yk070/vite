import React from "react";
import useCtx from "../context/useCtx.jsx";
import Basic from "./Basic.jsx";
import { indexKeyObjObj } from "../obj/namedObj.js";
import AcButton from "./AcButton.jsx";
import Ac from "./Ac.jsx";
const AcButtons = () => {
  const ctx = useCtx();
  if (ctx.isWoAcBasic) return <Basic />;
  return (
    <>
      {Object.entries(indexKeyObjObj[ctx.currentModAc]).map(
        ([preKey, styleObj]) => (
          <AcButton key={preKey} preKey={preKey} styleObj={styleObj} />
        ),
      )}
    </>
  );
};

export default AcButtons;
