import React from "react";
import useCtx from "../context/useCtx.jsx";

const ResetButton = () => {
  const {
    setactgs,
    setCurrentModAc,
    setcurrentModTg,
    setSdAcModKey,
    setSdTgModKey,
    setisWoSpacehold,
  } = useCtx();
  const onclick = () => {
    setisWoSpacehold(false);
    setCurrentModAc("basic1");
    setcurrentModTg("none");
    setSdAcModKey(null);
    setSdTgModKey(null);
    setactgs([]);
  };
  return (
    <button
      onClick={onclick}
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#e74c3c",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        width: "100%",
        height: "56px",
        fontSize: "16px",
      }}
    >
      リセット
    </button>
  );
};

export default ResetButton;
