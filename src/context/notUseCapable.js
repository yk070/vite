const notUseCapable = (cx) => {
  // AdjEl
  const hdAdjElId = cx.hdAdjElObj?.id;
  const hdMoPrf = cx.hdAdjElObj?.prf;
  const cdMoAdj = cx.cdAdjElObj?.adj;
  const cdMoPrf = cx.cdAdjElObj?.prf;

  const isCapableOnHd = cx.acTgsSet.has(`${hdMoPrf?.ac}|${hdMoPrf?.tg}`);

  const hdAdjPrfs = cx.hdAdjObj?.prfs;
  const hdCaAdj = cx.hdAdjObj?.adj;

  const hdPoAaId = cx.hdPoObj?.id;
  const hdPoAaPrfs = cx.hdPoObj?.prfs;
  const hdPoAaPrf = cx.hdPoObj?.Prf;

  const cdPoPrfs = cx.cdPoObj?.prfs;
  const cdPoAdj = cx.cdPoObj?.adj;

  return {
    cdPoPrfs,
    cdPoAdj,
    hdPoAaPrf,
    hdPoAaPrfs,
    hdPoAaId,
    hdAdjPrfs,
    hdCaAdj,
    cdMoAdj,
    cdMoPrf,
    hdMoPrf,
    hdAdjElId,
    isCapableOnHd,
  };
};
export default notUseCapable;
