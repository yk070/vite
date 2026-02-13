import { createContext, useContext, useRef } from "react";
import useMain from "./useMain.js";
import notUseMain from "./notUseMain.js";
import useCdTgAdjNou from "./useCdTgAdjNou.js";
import useHistory from "./useHistory.js";
import notUseScript from "./notUseScript.js";
import notUseArrow from "./notUseArrow.jsx";
import useHdAdjAdj from "./useHdAdjAdj.js";
import notUseTgCaps from "./notUseTgCaps.js";
import notUseCapable from "./notUseCapable.js";
import useUsedItms from "./useUsedItms.js";
import useCdAdjElePrf from "./useCdAdjElePrf.js";

const AppContext = createContext(null);

const CtxProvider = ({ children }) => {
  const ctx = {};
  ctx.isCdMoRef = useRef(false);

  Object.assign(ctx, useMain());
  Object.assign(ctx, useHistory());
  // console.log(ctx.usedItms);

  Object.assign(ctx, notUseMain(ctx)); //1
  ctx.tgCaps = notUseTgCaps(ctx); //2
  Object.assign(ctx, notUseCapable(ctx));
  Object.assign(ctx, notUseScript(ctx));
  Object.assign(ctx, notUseArrow(ctx)); //3

  useCdTgAdjNou(ctx);

  useUsedItms(ctx);

  useHdAdjAdj(ctx);
  useCdAdjElePrf(ctx);

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

const useCtx = () => useContext(AppContext);

export { CtxProvider };
export default useCtx;
