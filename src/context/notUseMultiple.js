const notUseMultiple = (ctx) => {
  //stable
  const hdStableObjs = ctx.hdStableObj?.objs;
  const isStableOnHd = hdStableObjs?.every((obj) =>
    ctx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  );
  //capable
  const hdCapablePrfs = ctx.hdCapableObj?.prfs;
  const hdCapableId = ctx.hdCapableObj?.id;

  const cdCapableAdj = ctx.cdCapableObj?.adj;
  const cdCapablePrfs = ctx.cdCapableObj?.prfs;

  const isCapableOnHd = hdCapablePrfs?.every((obj) =>
    ctx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  );

  const hdBlockPrfss = ctx.hdBlockObj?.prfss;
  const hdBlockAdj = ctx.hdBlockObj?.adj;

  return {
    hdStableObjs,
    hdBlockPrfss,
    hdBlockAdj,
    cdCapableAdj,
    cdCapablePrfs,
    hdCapablePrfs,
    hdCapableId,
    isStableOnHd,
    isCapableOnHd,
  };
};
export default notUseMultiple;
