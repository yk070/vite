import { useEffect } from "react";
import { virtualVersatiles } from "../array/namedArray.js";

const useHdPo = (ctx) => {
  useEffect(() => {
    //setCurrCapTg
    // if (ctx.isCdPoRef.current) {
    //   ctx.isCdPoRef.current = false;
    //   return;
    // }
    const hdAdj = ctx.hdPoBlAdj;
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
  }, [ctx.hdPoBlAdj]);
};

export default useHdPo;

// useEffect(() => {
//   if (!ctx.cdPoPrf) return;
//   ctx.isCdPoRef.current = true;
//   ctx.setCdPoObj(null);
//   ctx.setCdAcObj(null);
//   ctx.setHdPoObj(null);
//   ctx.setHdPoBlObj(null);
//   ctx.setCurrCapTg(ctx.cdPoAdj);

//   ctx.setUsedItms((prev) => {
//     const filteredPrfs = prev.filter(
//       (prf) =>
//         !ctx.cdPoPrf.some((cdCapablePrf) => cdCapablePrf.tg === prf.tg),
//     );
//     const isAlreadySd = ctx.cdPoPrf?.every((cdCapablePrf) =>
//       ctx.acTgsSet.has(`${cdCapablePrf.ac}|${cdCapablePrf.tg}`),
//     );

//     let newPrfs = [...filteredPrfs];

//     if (!isAlreadySd) {
//       newPrfs = [...newPrfs, ...ctx.cdPoPrf];
//     }
//     return newPrfs;
//   });
// }, [ctx.cdPoPrf]);
