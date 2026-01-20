import React from "react";
import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import Tg from "./Tg.jsx";
import Ac from "./Ac.jsx";

const AlphaNumBlock = ({ derive }) => {
  const ctx = useCtx();
  if (
    (derive === "tg" && ctx.isWoTgNone) ||
    (derive === "ac" && ctx.isWoAcBasic)
  )
    return;
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
