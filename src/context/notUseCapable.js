const notUseCapable = (ctx) => {
  //capable
  const hdCapablePrfs = ctx.hdsingleObj?.prfs;
  const hdCapableId = ctx.hdsingleObj?.id;

  const cdCapableAdj = ctx.cdsingleObj?.adj;
  const cdCapablePrfs = ctx.cdsingleObj?.prfs;

  const isCapableOnHd = hdCapablePrfs?.every((obj) =>
    ctx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  );

  const hdBlockPrfss = ctx.hdBlockObj?.prfss;
  const hdBlockAdj = ctx.hdBlockObj?.adj;

  return {
    hdBlockPrfss,
    hdBlockAdj,
    cdCapableAdj,
    cdCapablePrfs,
    hdCapablePrfs,
    hdCapableId,
    isCapableOnHd,
  };
};
export default notUseCapable;
