import React from "react";
import AcIndex from "./AcIndex.jsx";
import useCtx from "../context/useCtx.jsx";
import { DefaultIndexes } from "../array/namedKeys.js";
import { acIndexLabelObj } from "../obj/namedObj.js";
import tone from "../style/color.jsx";
const AcIndexes = () => {
  const { currentModAc, setCurrentModAc } = useCtx();
  return (
    <>
      {DefaultIndexes.map((Index_OftenMod) => {
        const onclick = () => setCurrentModAc(Index_OftenMod);
        const isActive = Index_OftenMod === currentModAc;
        let color = tone.tgIndexColor;
        if (isActive) {
          color = tone.tgIndexSelectedColor;
        }
        const label = acIndexLabelObj[Index_OftenMod];
        return (
          <AcIndex
            key={Index_OftenMod}
            onclick={onclick}
            color={color}
            label={label}
          />
        );
      })}
    </>
  );
};

export default AcIndexes;
