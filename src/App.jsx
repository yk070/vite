import React from "react";
import Header from "./ui/area/Header.jsx";
import Sidebar from "./ui/area/Sidebar.jsx";
import Body from "./ui/area/Body.jsx";
import { CtxProvider } from "./ui/context/useCtx.jsx";

import Style from "./ui/style/look.jsx";

const App = () => {
  return (
    <CtxProvider>
      <div style={Style.Header1}>
        <Header />
      </div>
      <div className="scrollContainer" style={Style.Sidebar1}>
        <Sidebar />
      </div>
      <div style={Style.Body1}>
        <Body />
      </div>
    </CtxProvider>
  );
};
export default App;
