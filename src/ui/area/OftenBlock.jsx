import React from "react";
import look from "../style/look.jsx";
import OftenMulti from "./OftenMulti.jsx";
import OftenSingle from "./OftenSingle.jsx";
import useCtx from "../context/useCtx.jsx";
import MultiButtons from "./MultiButtons.jsx";
const OftenBlock = ({ halfProps }) => {
  const { title, objs } = halfProps;
  const ctx = useCtx();

  return (
    <>
      <div style={look.OftenBlock3}>{title}</div>
    </>
  );
};
export default OftenBlock;
