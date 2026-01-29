import {
  notAdjAcCaps,
  defaultAdjs,
  virtualVerstiles,
  lds,
} from "../array/namedArray.js";

const derivedMain = (ctx) => {
  const toggleAcTg = (x) => {
    ctx.setPreferences((prev) => {
      if (prev.includes(x)) {
        return prev.filter((item) => item !== x);
      } else {
        return [...prev, x];
      }
    });
  };

  const acTgSet = new Set(ctx.preferences?.map((obj) => `${obj.ac}|${obj.tg}`));
  const isTgAdjLdOnHd = ctx.hdTgAdjLdObj?.objs?.every((obj) =>
    acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  const getTgCaps = (ctx) => {
    if (["spaceHold", "muhHold"].every((k) => ctx.preferences.includes(k))) {
      return [...defaultAdjs, "space", "muhenkan"];
    }
    if (ctx.preferences.includes("spaceHold")) {
      return [...defaultAdjs, "space"];
    }
    if (ctx.preferences.includes("muhHold")) {
      return [...defaultAdjs, "muhenkan"];
    }
    return [...defaultAdjs];
  };
  const tgCaps = getTgCaps(ctx);

  const isWoSpaHold = ctx.preferences.includes("spaceHold");
  const isWoMuhHold = ctx.preferences.includes("muhHold");
  const isWoTgNone = ctx.currentAdjTg === "none";
  const isWoTgVirtual = virtualVerstiles.includes(ctx.currentAdjTg);
  const isWoTgShift = ctx.currentAdjTg === "shift";
  const isWoAcLd = lds?.includes(ctx.currentCapAc);
  const isWoAcBasic = notAdjAcCaps?.includes(ctx.currentCapAc);
  const isWoAcDefault = defaultAdjs?.includes(ctx.currentCapAc);
  const isWoAcSd = !!ctx.sdAcAdjNou;
  const isAcLdHd = !!ctx.hdAcLdObj;

  return {
    isWoTgNone,
    isWoTgVirtual,
    isWoAcSd,
    isTgAdjLdOnHd,
    isWoAcBasic,
    acTgSet,
    tgCaps,
    isWoTgShift,
    isWoSpaHold,
    isWoMuhHold,
    toggleAcTg,
    isWoAcLd,
    isWoAcDefault,
    isAcLdHd,
  };
};
export default derivedMain;
