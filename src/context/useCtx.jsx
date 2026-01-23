import React, { createContext, useContext } from "react";
import useStateBoss from "./useStateBoss.js";
import derivedState from "./derivedState.js";
import useEffectBoss from "./useEffectBoss.js";
import generateScript from "./generateScript.js";
import derivedArrow from "./derivedArrow.js";
const ContextProvider = createContext(null);
export const CtxProvider = ({ children }) => {
  const base = useStateBoss();
  const script = generateScript(base);
  const derived = derivedState(base);
  const arrow = derivedArrow(base);
  useEffectBoss(base, derived);
  return (
    <ContextProvider.Provider
      value={{ ...base, ...script, ...derived, ...arrow }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
const useCtx = () => useContext(ContextProvider);
export default useCtx;
