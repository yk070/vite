import { useEffect } from "react";

const useMultiClickObj = (ctx) => {
  useEffect(() => {
    ctx.setCdTgAdjLdObj(null);
    const objs = ctx.cdTgAdjLdObj?.objs;
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
  }, [ctx.cdTgAdjLdObj, ctx.currentAdjTg]);
};

export default useMultiClickObj;
