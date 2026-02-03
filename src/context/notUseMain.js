import {
  usableCaps,
  defaultAdjs,
  virtualVersatiles,
  capableCaps,
} from "../array/namedArray.js";
import easyObj from "../obj/easyObj.js";

const notUseMain = (ctx) => {
  const isWoSpaHold = ctx.preferences.includes("space");
  const isWoMuhHold = ctx.preferences.includes("muhenkan");
  const isWoTgNone = ctx.currCapTg === "none";
  const isWoAcNone = ctx.currCapAc === "none";
  const isWoTgVirtual = virtualVersatiles.includes(ctx.currCapTg);
  const isWoTgShift = ctx.currCapTg === "shift";
  const isWoCapable = capableCaps?.includes(ctx.currCapAc);
  const isWoUsable = usableCaps?.includes(ctx.currCapAc);
  const isWoFlexible = defaultAdjs?.includes(ctx.currCapAc);
  const isWoAcSd = !!ctx.sdAcAdjNou;
  const acTgSet = new Set(ctx.preferences?.map((obj) => `${obj.ac}|${obj.tg}`));

  const easyCurrAdjTgObj = easyObj[ctx.currCapTg];

  const toggleVirtual = (x) => {
    ctx.setPreferences((prev) => {
      if (prev.includes(x)) {
        return prev.filter((item) => item !== x);
      } else {
        return [...prev, x];
      }
    });
  };

  return {
    isWoAcNone,
    isWoTgNone,
    isWoTgVirtual,
    isWoAcSd,
    isWoUsable,
    isWoTgShift,
    isWoSpaHold,
    isWoMuhHold,
    toggleVirtual,
    isWoCapable,
    isWoFlexible,
    acTgSet,
    easyCurrAdjTgObj,
  };
};
export default notUseMain;
