const notUseMultiple = (ctx) => {
  const hdStableObjs = ctx.hdStableObj?.objs;
  const isStableOnHd = hdStableObjs?.every((obj) =>
    ctx.acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  const hdCapableBlockAdj = ctx.hdCapableBlockObj?.adj;
  const hdCapableBlockId = ctx.hdCapableBlockObj?.id;
  const hdCapableBlockObjss = ctx.hdCapableBlockObj?.adjObjss;

  const hdCapableAdjNous = [
    ...new Set(hdCapableBlockObjss?.flat().map((obj) => obj.tg)),
  ];
  const hdCapableObjs = ctx.hdCapableObj?.objs;
  const hdCapableId = ctx.hdCapableObj?.id;

  const cdCapableAdj = ctx.cdCapableObj?.adj;
  const cdCapableObjs = ctx.cdCapableObj?.objs;

  const isCapableOnHd = hdCapableObjs?.every((obj) =>
    ctx.acTgSet.has(`${obj.ac}|${obj.tg}`),
  );
  return {
    cdCapableAdj,
    cdCapableObjs,
    hdCapableBlockAdj,
    hdCapableBlockId,
    hdCapableObjs,
    hdCapableId,
    hdCapableBlockObjss,
    hdCapableAdjNous,
    isStableOnHd,
    isCapableOnHd,
  };
};
export default notUseMultiple;
