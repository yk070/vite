import { createContext, useContext } from "react";
import useStateMain from "./useStateMain.js";
import derivedMain from "./derivedMain.js";
import usePreferences from "./usePreferences.js";
import useMultiClickObj from "./useMultiClickObj.js";
import useStateHistory from "./useStateHistory.js";
import derivedScript from "./derivedScript.js";
import derivedArrow from "./derivedArrow.jsx";
import useHdAcLd from "./useHdAcLd.js";

const AppContext = createContext(null);
export const CtxProvider = ({ children }) => {
  const ctx = {};

  Object.assign(ctx, useStateMain());
  Object.assign(ctx, useStateHistory());
  // console.log(ctx.preferences);
  console.log(ctx.isAcLd);

  Object.assign(ctx, derivedMain(ctx));
  Object.assign(ctx, derivedScript(ctx));
  Object.assign(ctx, derivedArrow(ctx));

  usePreferences(ctx);
  useMultiClickObj(ctx);
  useHdAcLd(ctx);

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

const useCtx = () => useContext(AppContext);

export default useCtx;
