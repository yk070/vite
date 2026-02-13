const notUseCapable = (ctx) => {
  // AdjEl
  const hdAdjElId = ctx.hdAdjElObj?.id;
  const hdMoPrf = ctx.hdAdjElObj?.prf;
  const cdMoAdj = ctx.cdAdjElObj?.adj;
  const cdMoPrf = ctx.cdAdjElObj?.prf;

  const isCapableOnHd = ctx.acTgsSet.has(`${hdMoPrf?.ac}|${hdMoPrf?.tg}`);

  const hdAdjPrfs = ctx.hdAdjObj?.prfs;
  const hdAdjAdj = ctx.hdAdjObj?.adj;

  const hdPoAaId = ctx.hdPoAaObj?.id;
  const hdPoAaPrfs = ctx.hdPoAaObj?.prfs;
  const hdPoAaPrf = ctx.hdPoAaObj?.Prf;

  const cdPoAaPrfs = ctx.cdPoAaObj?.prfs;
  const cdPoAaAdj = ctx.cdPoAaObj?.adj;

  return {
    cdPoAaPrfs,
    cdPoAaAdj,
    hdPoAaPrf,
    hdPoAaPrfs,
    hdPoAaId,
    hdAdjPrfs,
    hdAdjAdj,
    cdMoAdj,
    cdMoPrf,
    hdMoPrf,
    hdAdjElId,
    isCapableOnHd,
  };
};
export default notUseCapable;
