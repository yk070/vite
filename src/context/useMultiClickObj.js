import { useEffect } from "react";
import multiObj from "../obj/multiObj.js";

const useMultiClickObj = (ctx) => {
  useEffect(() => {
    ctx.setCdMultiObj(null);
    const objs = ctx.cdMultiObjs?.objs;
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
  }, [ctx.cdMultiObjs, ctx.currentAdjTg]);
};

export default useMultiClickObj;
