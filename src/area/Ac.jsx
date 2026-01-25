import React from "react";
import look from "../style/look.jsx";
import AcCaps from "./AcCaps.jsx";
import AcEles from "./AcEles.jsx";
import AlphaNumBlock from "./AlphaNumBlock.jsx";
import useCtx from "../context/useCtx.jsx";
import AcTg from "./AcTg.jsx";
const Ac = () => {
  const ctx = useCtx();
  return (
    <>
      <div style={look.ac2}>
        <AcCaps />
      </div>
      <div style={look.ac3}>
        <AlphaNumBlock derive="ac" />
        <AcEles />
      </div>
    </>
  );
};

export default Ac;
