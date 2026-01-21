import React from "react";
import look from "../style/look.jsx";
import TgIndexes from "./TgIndexes.jsx";
import TgButtons from "./TgButtons.jsx";
import AlphaNumBlock from "./AlphaNumBlock.jsx";
import useCtx from "../context/useCtx.jsx";
import Arrow from "./Arrow.jsx";
import TgLines from "./TgLines.jsx";
import TgSpaceToggle from "./TgSpaceToggle.jsx";
import AcTg from "./AcTg.jsx";
const Tg = () => {
  const ctx = useCtx();
  const containerRef = React.useRef(null);
  return (
    <>
      <div ref={containerRef} style={look.tg2}>
        <TgSpaceToggle />
        <TgLines containerRef={containerRef} />
        <AlphaNumBlock derive="tg" />
        <TgButtons />
        <Arrow containerRef={containerRef} />
      </div>
      <div style={look.tg4}>
        <TgIndexes />
      </div>
    </>
  );
};

export default Tg;
