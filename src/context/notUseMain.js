import {
  notAdjAcCaps,
  defaultAdjs,
  virtualVerstiles,
  lds,
} from "../array/namedArray.js";

const notUseMain = (ctx) => {
  const isWoSpaHold = ctx.preferences.includes("space");
  const isWoMuhHold = ctx.preferences.includes("muhenkan");
  const isWoTgNone = ctx.currentAdjTg === "none";
  const isWoTgVirtual = virtualVerstiles.includes(ctx.currentAdjTg);
  const isWoTgShift = ctx.currentAdjTg === "shift";
  const isWoCapable = lds?.includes(ctx.currentCapAc);
  const isWoAcBasic = notAdjAcCaps?.includes(ctx.currentCapAc);
  const isWoAcDefault = defaultAdjs?.includes(ctx.currentCapAc);
  const isWoAcSd = !!ctx.sdAcAdjNou;

  const hdCapableBlockAdj = ctx.hdCapableBlockObj?.adj;
  const hdCapableBlockId = ctx.hdCapableBlockObj?.id;
  const hdCapableBlockObjs = ctx.hdCapableBlockObj?.objs;

  const hdCapableAdjNous = [
    ...new Set(
      hdCapableBlockObjs?.flatMap((obj) => obj.objs.map((obj) => obj.tg)),
    ),
  ];
  const hdCapableObjs = ctx.hdCapableObj?.objs;
  const hdCapableId = ctx.hdCapableObj?.id;

  const cdCapableAdj = ctx.cdCapableObj?.adj;
  const cdCapableObjs = ctx.cdCapableObj?.objs;

  const toggleVirtual = (x) => {
    ctx.setPreferences((prev) => {
      if (prev.includes(x)) {
        return prev.filter((item) => item !== x);
      } else {
        return [...prev, x];
      }
    });
  };

  const acTgSet = new Set(ctx.preferences?.map((obj) => `${obj.ac}|${obj.tg}`));
  const isStableOnHd = ctx.hdStableObj?.objs?.every((obj) =>
    acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  return {
    isWoTgNone,
    isWoTgVirtual,
    isWoAcSd,
    isStableOnHd,
    isWoAcBasic,
    acTgSet,
    isWoTgShift,
    isWoSpaHold,
    isWoMuhHold,
    toggleVirtual,
    isWoCapable,
    isWoAcDefault,
    cdCapableAdj,
    cdCapableObjs,
    hdCapableBlockAdj,
    hdCapableBlockId,
    hdCapableObjs,
    hdCapableId,
    hdCapableBlockObjs,
    hdCapableAdjNous,
  };
};
export default notUseMain;
