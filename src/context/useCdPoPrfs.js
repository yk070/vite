import { useEffect } from "react";

const useCdPoPrfs = (cx) => {
  useEffect(() => {
    if (!cx.cdPoPrfs?.length) return;
    cx.isAdjFixRef.current = true;
    cx.setCdPoObj(null);
    cx.setCdAcObj(null);
    cx.setHdAdjObj(null);
    cx.setHdAdjElObj(null);
    cx.setCurrCapTg(cx.cdPoAdj);

    cx.setUsedItms((prev) => {
      const filteredUsedItms = prev.filter((prf) => cx.cdMoPrf.tg !== prf.tg);
      const isAlreadySd = prev.some((prf) => cx.cdMoPrf.tg === prf.tg);

      if (isAlreadySd) {
        return filteredUsedItms;
      }
      return prev.concat(cx.cdMoPrf);
    });
  }, [cx.cdPoPrfs]);
};

export default useCdPoPrfs;
