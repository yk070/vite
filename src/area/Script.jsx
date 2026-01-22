import React from "react";
import useCtx from "../context/useCtx.jsx";
import styles from "../style/scroll.module.css";

const Script = () => {
  const ctx = useCtx();
  return (
    <div
      className={styles.scriptScroll}
      style={{
        margin: 10,
        backgroundColor: "#444",
        overflowY: "scroll",
        whiteSpace: "pre-wrap",
        flex: 1,
      }}
    >
      {ctx.script}
    </div>
  );
};

export default Script;
