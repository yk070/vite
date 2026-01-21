import React from "react";
import useCtx from "../context/useCtx.jsx";
import tgConvert from "../convert/tgConvert.jsx";
import acConvert from "../convert/acConvert.jsx";

const Script = () => {
  const ctx = useCtx();
  return (
    <div
      style={{
        margin: 10,
        backgroundColor: "#444",
        overflowY: "scroll",
        whiteSpace: "pre-wrap",
        flex: 1,
      }}
    >
      {ctx.script}
    </div>
  );
};

export default Script;
