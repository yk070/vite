import { useEffect } from "react";

const useCdStableObj = (ctx) => {
  useEffect(() => {
    ctx.setCdStableObjs(null);
    if (ctx.cdStableObjs == null) return;
    if (!Array.isArray(ctx.cdStableObjs)) return;
    if (!ctx.cdStableObjs) return;

    ctx.setAllSettings((prev) => {
      const filteredPrfs = prev.filter(
        (prf) =>
          !ctx.cdStableObjs.some(
            (targetMiniObj) => targetMiniObj.tg === prf.tg,
          ),
      );
      const isAlreadySd = ctx.cdStableObjs?.every((targetMiniObj) =>
        ctx.acTgsSet.has(`${targetMiniObj.ac}|${targetMiniObj.tg}`),
      );
      return isAlreadySd
        ? filteredPrfs
        : [...filteredPrfs, ...ctx.cdStableObjs];
    });
  }, [ctx.cdStableObjs]);
};

export default useCdStableObj;
