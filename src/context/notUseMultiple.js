const notUseMultiple = (ctx) => {
  const hdStableObjs = ctx.hdStableObj?.objs;
  const isStableOnHd = hdStableObjs?.every((obj) =>
    ctx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  );

  // const hdCapableBlockAdj = ctx.hdCapableBlockObj?.adj;
  // const hdCapableBlockId = ctx.hdCapableBlockObj?.id;
  // const hdCapableBlockObjss = ctx.hdCapableBlockObj?.prfss;

  // const hdCapableAdjNous = [
  //   ...new Set(hdCapableBlockObjss?.flat().map((obj) => obj.tg)),
  // ];
  const hdCapablePrfs = ctx.hdCapableObj?.prfs;
  const hdCapableId = ctx.hdCapableObj?.id;

  const cdCapableAdj = ctx.cdCapableObj?.adj;
  const cdCapablePrfs = ctx.cdCapableObj?.prfs;

  const isCapableOnHd = hdCapablePrfs?.every((obj) =>
    ctx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  );
  return {
    cdCapableAdj,
    cdCapablePrfs,
    hdCapablePrfs,
    hdCapableId,
    isStableOnHd,
    isCapableOnHd,
  };
};
export default notUseMultiple;
