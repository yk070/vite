import { createContext, useContext, useRef } from "react";
import useMain from "./useMain.js";
import notUseMain from "./notUseMain.js";
import useAcTgAdjNou from "./useAcTgAdjNou.js";
import useHistory from "./useHistory.js";
import notUseScript from "./notUseScript.js";
import notUseArrow from "./notUseArrow.jsx";
import useHdMo from "./useHdMo.js";
import notUseTgCaps from "./notUseTgCaps.js";
import notUseCapable from "./notUseCapable.js";
import useUsedItms from "./useUsedItms.js";
import useCdMo from "./useCdMo.js";
import useHdPo from "./useHdPo.js";

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

  useAcTgAdjNou(ctx);
  useHdMo(ctx);
  useHdPo(ctx);
  useCdMo(ctx);
  useUsedItms(ctx);

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

const useCtx = () => useContext(AppContext);

export { CtxProvider };
export default useCtx;
