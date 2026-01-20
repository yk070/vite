import React from "react";
import useCtx from "../context/useCtx.jsx";
import BasicButton from "./BasicButton.jsx";
import BasicHalf from "./BasicHalf.jsx";
const BasicButtons = ({ modKeys }) => {
  const ctx = useCtx();
  return (
    <>
      {modKeys?.map((modKey) => (
        <BasicButton key={modKey} modKey={modKey} />
      ))}
    </>
  );
};

export default BasicButtons;
