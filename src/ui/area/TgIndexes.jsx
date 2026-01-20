import React from "react";
import TgIndex from "./TgIndex.jsx";
import useCtx from "../context/useCtx.jsx";
import { acIndexLabelObj } from "../obj/namedObj.jsx";
import look from "../style/look.jsx";
import tone from "../style/color.jsx";

const TgIndexes = () => {
  const {
    currentModTg,
    setcurrentModTg,
    ContextIndexes,
    isWoTgNone,
    AwayHoveredKey,
    AwayHoveredMod,
    HoveredModKeyTgLabel,
    AwayHoveredKeyLabel,
  } = useCtx();
  return (
    <>
      {ContextIndexes.map((ContextIndex) => {
        const onclick = () => setcurrentModTg(ContextIndex);
        const isSelected = ContextIndex === currentModTg;
        const isAwayHovered =
          AwayHoveredMod === ContextIndex && currentModTg !== AwayHoveredMod;
        let BodyColor = tone.tgIndexColor;
        if (isSelected && isWoTgNone) {
          BodyColor = "#444444";
        } else if (isSelected) {
          BodyColor = tone.ModColor;
        }
        const content = (
          <>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span style={look.tgIndex2}>
                {acIndexLabelObj[ContextIndex]}
                {isAwayHovered && <>{AwayHoveredKeyLabel}</>}
              </span>{" "}
              {isAwayHovered && <>=</>}
              <span style={look.tgIndex4}>
                {isAwayHovered && <>{HoveredModKeyTgLabel}</>}
              </span>
            </span>
          </>
        );
        return (
          <TgIndex
            key={ContextIndex}
            onclick={onclick}
            BodyColor={BodyColor}
            content={content}
          />
        );
      })}
    </>
  );
};

export default TgIndexes;
