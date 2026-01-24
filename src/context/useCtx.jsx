import React, { createContext, useContext } from "react";
import useStateBoss from "./useStateBoss.js";
import derivedMain from "./derivedMain.js";
import useactgObjs from "./useactgObjs.js";
import useMultiClickObj from "./useMultiClickObj.js";
import derivedScript from "./derivedScript.js";
import derivedArrow from "./derivedArrow.js";
const AppContext = createContext(null);
export const CtxProvider = ({ children }) => {
  const base = useStateBoss();
  const main = derivedMain(base);
  const script = derivedScript(base);
  const arrow = derivedArrow(base, main);

  useactgObjs(base);
  useMultiClickObj(base, main);

  return (
    <AppContext.Provider value={{ ...base, ...script, ...main, ...arrow }}>
      {children}
    </AppContext.Provider>
  );
};
const useCtx = () => useContext(AppContext);

export default useCtx;
