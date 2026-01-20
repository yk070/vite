import React from "react";
import useCtx from "../context/useCtx.jsx";
export const OftenHandleLogic = ({ modKey }) => {
  const { setHdModKeyAc, setSdAcModKey, isWoAcSd } = useCtx();
  //  isSingle
  return {
    click: clickSingle,
    hover: hoverSingle,
    leave: leaveSingle,
  };
};
