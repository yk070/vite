import { useEffect } from "react";

const useCdMoPrf = (cx) => {
  useEffect(() => {
    if (!cx.cdMoPrf) return;
    cx.isAdjFixRef.current = true;
    cx.setCdAdjElObj(null);
    cx.setCdAcObj(null);
    cx.setHdAdjElObj(null);
    cx.setHdAdjObj(null);
    cx.setCurrCapTg(cx.cdMoAdj);

    cx.setUsedItms((prev) => {
      const filteredUsedItms = prev.filter((prf) => cx.cdMoPrf.tg !== prf.tg);
      const isAlreadySd = prev.some((prf) => cx.cdMoPrf.tg === prf.tg);

      if (isAlreadySd) {
        return filteredUsedItms;
      }
      return prev.concat(cx.cdMoPrf);
    });
  }, [cx.cdMoPrf]);
};

export default useCdMoPrf;
