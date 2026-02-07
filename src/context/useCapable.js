import { useEffect, useRef } from "react";
import { virtualVersatiles } from "../array/namedArray.js";

const useCapable = (ctx) => {
  const refCapTg = useRef(null);
  const isRefCap = useRef(false);
  const isFromCdCapableRef = useRef(false);

  useEffect(() => {
    if (isFromCdCapableRef.current) {
      isFromCdCapableRef.current = false;
      return;
    }
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

  useEffect(() => {
    if (!ctx.cdCapablePrfs) return;
    isFromCdCapableRef.current = true;
    ctx.setCdsingleObj(null);
    ctx.setCdAcAdjNou(null);
    ctx.setHdsingleObj(null);
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
