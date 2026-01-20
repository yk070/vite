import React from "react";
import look from "../style/look.jsx";
import AcIndexes from "./AcIndexes.jsx";
import AcButtons from "./AcButtons.jsx";
import AlphaNumBlock from "./AlphaNumBlock.jsx";
import useCtx from "../context/useCtx.jsx";
import AcTg from "./AcTg.jsx";
const Ac = () => {
  const ctx = useCtx();
  return (
    <>
      <div style={look.ac2}>
        <AcIndexes />
      </div>
      <div style={look.ac3}>
        <AlphaNumBlock derive="ac" />
        <AcButtons />
      </div>
    </>
  );
};

export default Ac;
