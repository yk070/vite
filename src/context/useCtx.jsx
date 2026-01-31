import { createContext, useContext } from "react";
import useMain from "./useMain.js";
import notUseMain from "./notUseMain.js";
import usePreferences from "./usePreferences.js";
import useCdStableObj from "./useCdStableObj.js";
import useHistory from "./useHistory.js";
import notUseScript from "./notUseScript.js";
import notUseArrow from "./notUseArrow.jsx";
import useCapable from "./useCapable.js";
import notUseTgCaps from "./notUseTgCaps.js";

const AppContext = createContext(null);

const CtxProvider = ({ children }) => {
  const ctx = {};

  Object.assign(ctx, useMain());
  Object.assign(ctx, useHistory());
  // console.log(ctx.preferences);

  Object.assign(ctx, notUseMain(ctx));
  Object.assign(ctx, notUseTgCaps(ctx));
  Object.assign(ctx, notUseScript(ctx));
  Object.assign(ctx, notUseArrow(ctx));

  usePreferences(ctx);
  useCapable(ctx);
  useCdStableObj(ctx);

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

const useCtx = () => useContext(AppContext);

export { CtxProvider };
export default useCtx;
