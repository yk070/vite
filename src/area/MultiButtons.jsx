import React from "react";
import useCtx from "../context/useCtx.jsx";
import multiObj from "../obj/multiObj.js";
import MultiButton from "./MultiButton.jsx";
import AcTg from "./AcTg.jsx";
const MultiButtons = () => {
  const ctx = useCtx();
  const currentOftenObj = multiObj[ctx.currentAdjTg] ?? {};
  return (
    <>
      {Object.entries(currentOftenObj).map(([title, objs]) => (
        <MultiButton key={title} title={title} objs={objs} />
      ))}
    </>
  );
};

export default MultiButtons;
