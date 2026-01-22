import React, { createContext, useContext } from "react";
import useStateBoss from "./useStateBoss.js";
import derivedState from "./derivedState.js";
import useEffectBoss from "./useEffectBoss.js";
const ContextProvider = createContext(null);
export const CtxProvider = ({ children }) => {
  const base = useStateBoss();
  const derived = derivedState(base);
  useEffectBoss(base, derived);
  return (
    <ContextProvider.Provider value={{ ...base, ...derived }}>
      {children}
    </ContextProvider.Provider>
  );
};
const useCtx = () => useContext(ContextProvider);
export default useCtx;
