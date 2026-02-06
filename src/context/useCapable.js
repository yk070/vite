import { useEffect, useRef } from "react";
import { virtualVersatiles } from "../array/namedArray.js";

const useCapable = (ctx) => {
  //ctx.hdBlockAdj
  const refCapTg = useRef(null);
  const isRefCap = useRef(false);

  useEffect(() => {
    const hdAdj = ctx.hdBlockAdj;
    //setCurrCapTg
    if (!isRefCap.current) {
      refCapTg.current = ctx.currCapTg;
      isRefCap.current = true;
    }
    if (hdAdj) {
      ctx.setCurrCapTg(hdAdj);
    } else if (isRefCap.current) {
      ctx.setCurrCapTg(refCapTg.current);
      refCapTg.current = null;
      isRefCap.current = false;
    }

    //setAllSettings
    const isHdAdjVirtual = virtualVersatiles.includes(hdAdj);

    const isNotIncluded = !ctx.exploitedAdjs.includes(hdAdj);
    const isToRevise = isHdAdjVirtual && isNotIncluded;
    if (isToRevise) {
      ctx.setToReviseVirtualAdj(hdAdj);
    } else {
      ctx.setToReviseVirtualAdj(null);
    }
  }, [ctx.hdBlockAdj]);

  //ctx.cdCapablePrfs
  useEffect(() => {
    if (!ctx.cdCapablePrfs) return;
    ctx.setCdAcAdjNou(null);
    ctx.setHdCapableObj(null);
    ctx.setHdBlockObj(null);
    ctx.setCurrCapTg(ctx.cdCapableAdj);

    ctx.setAllSettings((prev) => {
      const filteredPrfs = prev.filter(
        (prf) =>
          !ctx.cdCapablePrfs.some((cdCapablePrf) => cdCapablePrf.tg === prf.tg),
      );
      const isAlreadySd = ctx.cdCapablePrfs?.every((cdCapablePrf) =>
        ctx.acTgsSet.has(`${cdCapablePrf.ac}|${cdCapablePrf.tg}`),
      );

      let newPrfs = [...filteredPrfs];
      if (!isAlreadySd) {
        newPrfs = [...newPrfs, ...ctx.cdCapablePrfs];
      }
      return newPrfs;
    });
  }, [ctx.cdCapablePrfs]);
};

export default useCapable;
