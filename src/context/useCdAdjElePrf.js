import { useEffect } from "react";

const useCdAdjElePrf = (ctx) => {
  useEffect(() => {
    if (!ctx.cdMoPrf) return;
    ctx.isCdMoRef.current = true;
    ctx.setCdAdjEleObj(null);
    ctx.setCdAcObj(null);
    ctx.setHdAdjElObj(null);
    ctx.setHdAdjObj(null);
    ctx.setCurrCapTg(ctx.cdMoAdj);

    ctx.setUsedItms((prev) => {
      const filteredUsedItms = prev.filter((prf) => ctx.cdMoPrf.tg !== prf.tg);
      const isAlreadySd = prev.some((prf) => ctx.cdMoPrf.tg === prf.tg);

      if (isAlreadySd) {
        return filteredUsedItms;
      }
      return prev.concat(ctx.cdMoPrf);
    });
  }, [ctx.cdMoPrf]);
};

export default useCdAdjElePrf;
