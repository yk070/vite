import { useEffect, useRef } from "react";
import { virtualVersatiles } from "../array/namedArray.js";

const useCapable = (ctx) => {
  //ctx.hdCapableBlockAdj
  const prevAllSettingsRef = useRef(null);
  const prevCapTgRef = useRef(null);
  useEffect(() => {
    const hdAdj = ctx.hdCapableBlockAdj;
    const isHdAdjVirtual = virtualVersatiles.includes(hdAdj);
    const isNotIncluded = !ctx.exploitedAdjs.includes(hdAdj);

    if (!prevAllSettingsRef.current) {
      prevAllSettingsRef.current = ctx.allSettings;
      prevCapTgRef.current = ctx.currCapTg;
    }

    if (isHdAdjVirtual) {
      console.log("virtual");
      if (isNotIncluded) {
        console.log("isNotIncluded");
        ctx.setAllSettings((prev) => [...prev, hdAdj]);
      } else {
        ctx.setAllSettings(prevAllSettingsRef.current);
        prevAllSettingsRef.current = null;
      }
    } else {
      console.log("isnotvirtual");
      ctx.setAllSettings(prevAllSettingsRef.current);
      prevAllSettingsRef.current = null;
    }

    if (hdAdj) {
      ctx.setCurrAdjTg(hdAdj);
    } else {
      ctx.setCurrAdjTg(prevCapTgRef.current);
    }
  }, [ctx.hdCapableBlockAdj]);

  //ctx.cdCapablePrfs
  useEffect(() => {
    if (!ctx.cdCapablePrfs) return;
    ctx.setCdAcAdjNou(null);
    ctx.setHdCapableObj(null);
    ctx.setCdCapableObj(null);
    ctx.setCurrAdjTg(ctx.cdCapableAdj);

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
