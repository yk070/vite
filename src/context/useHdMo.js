import { useEffect } from "react";
import { virtualVersatiles } from "../array/namedArray.js";

const useHdMo = (ctx) => {
  useEffect(() => {
    //setCurrCapTg
    if (ctx.isCdMoRef.current) {
      ctx.isCdMoRef.current = false;
      return;
    }
    const hdAdj = ctx.hdMoBlAdj;
    if (hdAdj) {
      ctx.setCurrCapTg(hdAdj);
    } else if (ctx.capPseudoRef) {
      ctx.setCurrCapTg(ctx.capPseudoRef);
    }

    //setUsedItms
    const isHdAdjVirtual = virtualVersatiles.includes(hdAdj);
    const isNotIncluded = !ctx.usedAdjs.includes(hdAdj);
    const isToRevise = isHdAdjVirtual && isNotIncluded;
    if (isToRevise) {
      ctx.setToReviseAdj(hdAdj);
    } else {
      ctx.setToReviseAdj(null);
    }
  }, [ctx.hdMoBlAdj]);
};

export default useHdMo;

// useEffect(() => {
//   if (!ctx.cdMoPrf) return;
//   ctx.isCdMoRef.current = true;
//   ctx.setCdMoObj(null);
//   ctx.setCdAcObj(null);
//   ctx.setHdMoObj(null);
//   ctx.setHdMoBlObj(null);
//   ctx.setCurrCapTg(ctx.cdMoAdj);

//   ctx.setUsedItms((prev) => {
//     const filteredPrfs = prev.filter(
//       (prf) =>
//         !ctx.cdMoPrf.some((cdCapablePrf) => cdCapablePrf.tg === prf.tg),
//     );
//     const isAlreadySd = ctx.cdMoPrf?.every((cdCapablePrf) =>
//       ctx.acTgsSet.has(`${cdCapablePrf.ac}|${cdCapablePrf.tg}`),
//     );

//     let newPrfs = [...filteredPrfs];

//     if (!isAlreadySd) {
//       newPrfs = [...newPrfs, ...ctx.cdMoPrf];
//     }
//     return newPrfs;
//   });
// }, [ctx.cdMoPrf]);
