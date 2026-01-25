import React from "react";
import AcCap from "./AcCap.jsx";
import useCtx from "../context/useCtx.jsx";
import { acCaps } from "../array/namedNous.js";
import { acCapLabelObj } from "../obj/namedObj.js";
import tone from "../style/color.jsx";
const AcCaps = () => {
  const { currentCapAc, setcurrentCapAc } = useCtx();
  return (
    <>
      {acCaps.map((acCap) => {
        const onclick = () => setcurrentCapAc(acCap);
        const isActive = acCap === currentCapAc;
        let color = tone.TgCapColor;
        if (isActive) {
          color = tone.TgCapSelectedColor;
        }
        const label = acCapLabelObj[acCap];
        return (
          <AcCap key={acCap} onclick={onclick} color={color} label={label} />
        );
      })}
    </>
  );
};

export default AcCaps;
