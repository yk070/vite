import React, { createContext, useContext } from "react";
import useStateBoss from "./useStateBoss.js";
import derivedState from "./derivedState.js";
import useEffectBoss from "./useEffectBoss.js";
import generateScript from "./generateScript.js";
import derivedArrow from "./derivedArrow.js";
const AppContext = createContext(null);
export const CtxProvider = ({ children }) => {
  const base = useStateBoss();
  const script = generateScript(base);
  const derived = derivedState(base);
  const arrow = derivedArrow(base);
  useEffectBoss(base, derived);
  return (
    <AppContext.Provider value={{ ...base, ...script, ...derived, ...arrow }}>
      {children}
    </AppContext.Provider>
  );
};
const useCtx = () => useContext(AppContext);
export default useCtx;
