import React from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Body from "./Body.jsx";
import { CtxProvider } from "../context/useCtx.jsx";
import styles from "../style/scroll.module.css";

import Style from "../style/look.jsx";

const App = () => {
  return (
    <CtxProvider>
      <div style={Style.Header1}>
        <Header />
      </div>
      <div className="scrollContainer" style={Style.Sidebar1}>
        <Sidebar />
      </div>
      <div className={styles.bodyScroll} style={Style.Body1}>
        <Body />
      </div>
    </CtxProvider>
  );
};
export default App;
