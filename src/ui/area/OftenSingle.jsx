import React from "react";
import useCtx from "../context/useCtx.jsx";
import OftenSingleButton from "./OftenSingleButton.jsx";
import OftenSingleLogic from "../logic/OftenSingleLogic.js";
import AssignConvert from "../convert/AssignConvert.jsx";
import tone from "../style/color.jsx";
import OftenBlock from "./OftenBlock.jsx";
const OftenSingle = ({ modKeys }) => {
  const ctx = useCtx();
  return (
    <>
      {modKeys.map((modKey) => {
        const from = OftenSingleLogic({ modKey });
        const Click = () => {
          if (ctx.isWoAcSd) {
            ctx.setSdAcModKey(null);
          } else {
            ctx.setSdAcModKey(modKey);
          }
        };
        const getBorderColor = () => {
          if (!ctx.isWoAcSd && from.isHd) {
            return tone.acSelectColor;
          }
          return "transparent";
        };
        const getButtonColor = () => {
          if (from.isActive) return tone.acSelectColor;
          return tone.normalButtonColor;
        };
        return (
          <OftenSingleButton
            key={modKey}
            from={from}
            ctx={ctx}
            Click={Click}
            Hover={() => ctx.setHdModKeyAc(modKey)}
            Leave={() => ctx.setHdModKeyAc(null)}
            Label={AssignConvert(modKey)}
            ButtonColor={getButtonColor()}
            BorderColor={getBorderColor()}
          />
        );
      })}
    </>
  );
};
export default OftenSingle;
