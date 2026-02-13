import React from "react";
import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import Tg from "./Tg.jsx";
import Ac from "./Ac.jsx";

const AlphaNumBlock = ({ source }) => {
  const cx = useCtx();
  if (
    (source === "tg" && (cx.isWoTgNone || cx.isWoTgShift)) ||
    (source === "ac" && (!cx.isWoFlexible || cx.isWoAcNone))
  )
    return null;
  return (
    <div style={{ opacity: 0.7, zIndex: 1 }}>
      <div style={look.tgBlock0} />
      <div style={look.tgBlock1} />
      <div style={look.tgBlock2} />
      <div style={look.tgBlock3} />
      <div style={look.tgBlock4} />
      <div style={look.tgBlock5} />
    </div>
  );
};

export default AlphaNumBlock;
