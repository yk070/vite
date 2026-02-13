import React from "react";
import look from "../style/look.jsx";
import AlphaNumBlock from "./AlphaNumBlock.jsx";
import useCtx from "../context/useCtx.jsx";
import Arrow from "./Arrow.jsx";
import TgToggle from "./TgToggle.jsx";
import TgCap from "./TgCap.jsx";
import TgEle from "./TgEle.jsx";
import { adjPosiIdObjObj } from "../obj/namedObj.js";
import keyPositions from "../array/keyPositions.js";
import { alphabetNumberNous } from "../array/namedArray.js";
import Line from "./Line.jsx";

const Tg = () => {
  const cx = useCtx();
  const containerRef = React.useRef(null);
  return (
    <>
      <div ref={containerRef} style={look.tg2}>
        <TgToggle />
        {keyPositions.map(({ key, headX, headY }) => {
          if (cx.isWoTgShift && alphabetNumberNous.includes(key)) return null;
          const props = { key, containerRef, headX, headY };
          return <Line key={key} props={props} />;
        })}
        <AlphaNumBlock source="tg" />
        {Object.entries(adjPosiIdObjObj[cx.currCapTg]).map(
          ([posiId, styleObj]) => (
            <TgEle key={posiId} posiId={posiId} styleObj={styleObj} />
          ),
        )}
        <Arrow containerRef={containerRef} />
      </div>
      <div style={look.tg4}>
        {cx.tgCaps.map((tgCap) => (
          <TgCap key={tgCap} tgCap={tgCap} />
        ))}
      </div>
    </>
  );
};

export default Tg;
