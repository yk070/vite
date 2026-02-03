import {
  notAdjAcCaps,
  defaultAdjs,
  virtualVerstiles,
  lds,
} from "../array/namedArray.js";
import easyObj from "../obj/easyObj.js";

const notUseMain = (ctx) => {
  const isWoSpaHold = ctx.preferences.includes("space");
  const isWoMuhHold = ctx.preferences.includes("muhenkan");
  const isWoTgNone = ctx.currAdjTg === "none";
  const isWoTgVirtual = virtualVerstiles.includes(ctx.currAdjTg);
  const isWoTgShift = ctx.currAdjTg === "shift";
  const isWoCapable = lds?.includes(ctx.currCapAc);
  const isWoAcBasic = notAdjAcCaps?.includes(ctx.currCapAc);
  const isWoAcDefault = defaultAdjs?.includes(ctx.currCapAc);
  const isWoAcSd = !!ctx.sdAcAdjNou;
  const acTgSet = new Set(ctx.preferences?.map((obj) => `${obj.ac}|${obj.tg}`));

  const easyCurrAdjTgObj = easyObj[ctx.currAdjTg];

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
    isWoTgNone,
    isWoTgVirtual,
    isWoAcSd,
    isWoAcBasic,
    isWoTgShift,
    isWoSpaHold,
    isWoMuhHold,
    toggleVirtual,
    isWoCapable,
    isWoAcDefault,
    acTgSet,
    easyCurrAdjTgObj,
  };
};
export default notUseMain;
