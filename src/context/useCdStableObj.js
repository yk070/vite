import { useEffect } from "react";

const useCdStableObj = (ctx) => {
  useEffect(() => {
    ctx.setCdStableObjs(null);
    if (ctx.cdStableObjs == null) return;
    if (!Array.isArray(ctx.cdStableObjs)) return;
    if (!ctx.cdStableObjs) return;

    ctx.setPreferences((prev) => {
      const filteredPreferences = prev.filter(
        (acTgObj) =>
          !ctx.cdStableObjs.some(
            (targetMiniObj) => targetMiniObj.tg === acTgObj.tg,
          ),
      );
      const isAlreadySd = ctx.cdStableObjs?.every((targetMiniObj) =>
        ctx.acTgSet.has(`${targetMiniObj.ac}|${targetMiniObj.tg}`),
      );
      return isAlreadySd
        ? filteredPreferences
        : [...filteredPreferences, ...ctx.cdStableObjs];
    });
  }, [ctx.cdStableObjs]);
};

export default useCdStableObj;
