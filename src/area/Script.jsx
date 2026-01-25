import React from "react";
import useCtx from "../context/useCtx.jsx";
import styles from "../style/scroll.module.css";
import look from "../style/look.jsx";

const Script = () => {
  const ctx = useCtx();
  return (
    <div className={styles.scriptScroll} style={look.script1}>
      <div style={{ paddingBottom: 10 }}>{ctx.script}</div>
    </div>
  );
};

export default Script;
