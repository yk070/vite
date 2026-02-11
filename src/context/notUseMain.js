import { CgLayoutGrid } from "react-icons/cg";
import {
  usableCaps,
  defaultAdjs,
  virtualVersatiles,
  capableCaps,
} from "../array/namedArray.js";
import easyObj from "../obj/easyObj.js";

const notUseMain = (ctx) => {
  const usedAdjs = ctx.usedItms.filter((v) => typeof v === "string");
  const usedPrfs = ctx.usedItms.filter(
    (v) => typeof v === "object" && v !== null,
  );

  const isWoSpaHold = usedAdjs?.includes("space");
  const isWoMuhHold = usedAdjs?.includes("muhenkan");
  const isWoTgNone = ctx.currCapTg === "none";
  const isWoAcNone = ctx.currCapAc === "none";
  const isWoTgVirtual = virtualVersatiles.includes(ctx.currCapTg);
  const isWoTgShift = ctx.currCapTg === "shift";
  const isWoCapable = capableCaps?.includes(ctx.currCapAc);
  const isWoUsable = usableCaps?.includes(ctx.currCapAc);
  const isWoFlexible = defaultAdjs?.includes(ctx.currCapAc);

  const cdAcAdjNou = ctx.cdAcObj?.adjNou;
  const capPseudoRef = ctx.cdAcObj?.capPseudoRef;
  const isWoAcSd = !!cdAcAdjNou;

  const acTgsSet = new Set(usedPrfs?.map((obj) => `${obj?.ac}|${obj?.tg}`));
  // console.log(acTgsSet);
  const easyCurrAdjTgObj = easyObj[ctx.currCapTg];

  const toggleVirtual = (x) => {
    ctx.setUsedItms((prev) => {
      if (prev.includes(x)) {
        return prev.filter((item) => item !== x);
      } else {
        return [...prev, x];
      }
    });
  };

  return {
    capPseudoRef,
    cdAcAdjNou,
    usedAdjs,
    usedPrfs,
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
