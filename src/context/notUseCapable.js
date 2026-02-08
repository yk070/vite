const notUseCapable = (ctx) => {
  //capable
  const hdCapablePrf = ctx.hdadjNouAdjNousObj?.prf;
  const hdCapableId = ctx.hdadjNouAdjNousObj?.id;

  const cdCapableAdj = ctx.cdadjNouAdjNousObj?.adj;
  const cdCapablePrfs = ctx.cdadjNouAdjNousObj?.prfs;

  const isCapableOnHd = ctx.acTgsSet.has(
    `${hdCapablePrf?.ac}|${hdCapablePrf?.tg}`,
  );

  const hdBlockPrfs = ctx.hdBlockObj?.prfs;
  const hdBlockAdj = ctx.hdBlockObj?.adj;

  return {
    hdBlockPrfs,
    hdBlockAdj,
    cdCapableAdj,
    cdCapablePrfs,
    hdCapablePrf,
    hdCapableId,
    isCapableOnHd,
  };
};
export default notUseCapable;
