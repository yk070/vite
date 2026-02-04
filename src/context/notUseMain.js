import {
  usableCaps,
  defaultAdjs,
  virtualVersatiles,
  capableCaps,
} from "../array/namedArray.js";
import easyObj from "../obj/easyObj.js";

const notUseMain = (ctx) => {
  const exploitedAdjs = ctx.allSettings.filter((v) => typeof v === "string");
  const prfs = ctx.allSettings.filter(
    (v) => typeof v === "object" && v !== null,
  );

  const isWoSpaHold = ctx.exploitedAdjs?.includes("space");
  const isWoMuhHold = ctx.exploitedAdjs?.includes("muhenkan");
  const isWoTgNone = ctx.currCapTg === "none";
  const isWoAcNone = ctx.currCapAc === "none";
  const isWoTgVirtual = virtualVersatiles.includes(ctx.currCapTg);
  const isWoTgShift = ctx.currCapTg === "shift";
  const isWoCapable = capableCaps?.includes(ctx.currCapAc);
  const isWoUsable = usableCaps?.includes(ctx.currCapAc);
  const isWoFlexible = defaultAdjs?.includes(ctx.currCapAc);
  const isWoAcSd = !!ctx.cdAcAdjNou;
  const acTgsSet = new Set(prfs?.map((obj) => `${obj?.ac}|${obj?.tg}`));
  // console.log(acTgsSet);
  const easyCurrAdjTgObj = easyObj[ctx.currCapTg];

  const toggleVirtual = (x) => {
    ctx.setAllSettings((prev) => {
      if (prev.includes(x)) {
        return prev.filter((item) => item !== x);
      } else {
        return [...prev, x];
      }
    });
  };

  return {
    exploitedAdjs,
    prfs,
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
    acTgsSet,
    easyCurrAdjTgObj,
  };
};
export default notUseMain;
