import React from "react";
import look from "../style/look.jsx";
import TgEles from "./TgEles.jsx";
import AlphaNumBlock from "./AlphaNumBlock.jsx";
import useCtx from "../context/useCtx.jsx";
import Arrow from "./Arrow.jsx";
import TgLines from "./TgLines.jsx";
import TgSpaceToggle from "./TgSpaceToggle.jsx";
import TgCap from "./TgCap.jsx";

const Tg = () => {
  const ctx = useCtx();
  const containerRef = React.useRef(null);
  return (
    <>
      <div ref={containerRef} style={look.tg2}>
        <TgSpaceToggle />
        <TgLines containerRef={containerRef} />
        <AlphaNumBlock derive="tg" />
        <TgEles />
        <Arrow containerRef={containerRef} />
      </div>
      <div style={look.tg4}>
        {ctx.tgCaps.map((tgCap) => (
          <TgCap key={tgCap} tgCap={tgCap} />
        ))}
      </div>
    </>
  );
};

export default Tg;
