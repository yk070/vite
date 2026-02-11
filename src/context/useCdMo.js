import { useEffect } from "react";

const useCdMo = (ctx) => {
  useEffect(() => {
    if (!ctx.cdMoPrf) return;
    ctx.isCdMoRef.current = true;
    ctx.setCdMoObj(null);
    ctx.setCdAcObj(null);
    ctx.setHdMoObj(null);
    ctx.setHdMoBlObj(null);
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

export default useCdMo;

// useEffect(() => {
//   if (!ctx.cdMoPrf) return;
//   ctx.isCdMoRef.current = true;
//   ctx.setCdMoObj(null);
//   ctx.setCdAcObj(null);
//   ctx.setHdMoObj(null);
//   ctx.setHdMoBlObj(null);
//   ctx.setCurrCapTg(ctx.cdMoAdj);

//   ctx.setUsedItms((prev) => {
//     const filteredUsedItms = prev.filter(
//       (prf) =>
//         !ctx.cdMoPrf.some((cdCapablePrf) => cdCapablePrf.tg === prf.tg),
//     );
//     const isAlreadySd = ctx.cdMoPrf?.every((cdCapablePrf) =>
//       ctx.acTgsSet.has(`${cdCapablePrf.ac}|${cdCapablePrf.tg}`),
//     );

//     let newPrfs = [...filteredUsedItms];

//     if (!isAlreadySd) {
//       newPrfs = [...newPrfs, ...ctx.cdMoPrf];
//     }
//     return newPrfs;
//   });
// }, [ctx.cdMoPrf]);
