import { createContext, useContext, useRef } from "react";
import useMain from "./useMain.js";
import notUseMain from "./notUseMain.js";
import useCdTgAn from "./useCdTgAn.js";
import useHistory from "./useHistory.js";
import notUseScript from "./notUseScript.js";
import notUseArrow from "./notUseArrow.jsx";
import useHdCaAdj from "./useHdCaAdj.js";
import notUseTgCaps from "./notUseTgCaps.js";
import notUseCapable from "./notUseCapable.js";
import useUsedItms from "./useUsedItms.js";
import useCdMoPrf from "./useCdMoPrf.js";
import useCdPoPrfs from "./useCdPoPrfs.js";

const AppContext = createContext(null);

const CtxProvider = ({ children }) => {
  const cx = {};
  cx.isAdjFixRef = useRef(false);

  Object.assign(cx, useMain());
  Object.assign(cx, useHistory());
  // console.log(cx.usedItms);

  Object.assign(cx, notUseMain(cx)); //1
  cx.tgCaps = notUseTgCaps(cx); //2
  Object.assign(cx, notUseCapable(cx));
  Object.assign(cx, notUseScript(cx));
  Object.assign(cx, notUseArrow(cx)); //3

  useCdTgAn(cx);

  useUsedItms(cx);

  useHdCaAdj(cx);
  useCdMoPrf(cx);
  useCdPoPrfs(cx);

  return <AppContext.Provider value={cx}>{children}</AppContext.Provider>;
};

const useCtx = () => useContext(AppContext);

export { CtxProvider };
export default useCtx;
