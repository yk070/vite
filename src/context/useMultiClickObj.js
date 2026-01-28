import { useEffect } from "react";
import tgAdjLdObj from "../obj/tgAdjLdObj.js";

const useMultiClickObj = (ctx) => {
  useEffect(() => {
    ctx.setCdmultiObj(null);
    const objs = ctx.cdmultiObjs?.objs;
    if (objs == null) return;
    if (!Array.isArray(objs)) return;
    if (!objs) return;

    ctx.setPreferences((prev) => {
      const filteredPreferences = prev.filter(
        (acTgObj) =>
          !objs.some((targetMiniObj) => targetMiniObj.tg === acTgObj.tg),
      );
      const isAlreadySd = objs?.every((targetMiniObj) =>
        ctx.acTgSet.has(`${targetMiniObj.ac}|${targetMiniObj.tg}`),
      );
      return isAlreadySd
        ? filteredPreferences
        : [...filteredPreferences, ...objs];
    });
  }, [ctx.cdmultiObjs, ctx.currentAdjTg]);
};

export default useMultiClickObj;
