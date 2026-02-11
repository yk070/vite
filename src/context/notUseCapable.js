const notUseCapable = (ctx) => {
  //capable
  const hdMoPrf = ctx.hdMoObj?.prf;
  const hdMoId = ctx.hdMoObj?.id;
  const cdMoAdj = ctx.cdMoObj?.adj;
  const cdMoPrf = ctx.cdMoObj?.prf;

  const hdPoPrfs = ctx.hdPoObj?.prfs;
  const hdPoId = ctx.hdPoObj?.id;

  const isCapableOnHd = ctx.acTgsSet.has(`${hdMoPrf?.ac}|${hdMoPrf?.tg}`);

  const hdMoBlPrfs = ctx.hdMoBlObj?.prfs;
  const hdMoBlAdj = ctx.hdMoBlObj?.adj;

  // const hdMoBlPrfs = ctx.hdMoBlObj?.prfs;
  const hdPoBlAdj = ctx.hdPoBlObj?.adj;

  return {
    hdPoPrfs,
    hdPoId,
    hdPoBlAdj,
    hdMoBlPrfs,
    hdMoBlAdj,
    cdMoAdj,
    cdMoPrf,
    hdMoPrf,
    hdMoId,
    isCapableOnHd,
  };
};
export default notUseCapable;
