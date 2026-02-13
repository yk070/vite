import React from "react";
import useCtx from "../context/useCtx.jsx";
import styles from "../style/scroll.module.css";
import look from "../style/look.jsx";

const Script = () => {
  const cx = useCtx();
  return (
    <div className={styles.scriptScroll} style={look.script1}>
      <div style={{ paddingBottom: 10 }}>{cx.script}</div>
    </div>
  );
};

export default Script;
