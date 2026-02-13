import { CgLayoutGrid } from "react-icons/cg";
import {
  usableCaps,
  defaultAdjs,
  virtualVersatiles,
  capableCaps,
} from "../array/namedArray.js";
import easyObj from "../obj/easyObj.js";

const notUseMain = (cx) => {
  const usedAdjs = cx.usedItms.filter((v) => typeof v === "string");
  const usedPrfs = cx.usedItms.filter(
    (v) => typeof v === "object" && v !== null,
  );

  const isWoSpaHold = usedAdjs?.includes("space");
  const isWoMuhHold = usedAdjs?.includes("muhenkan");
  const isWoTgNone = cx.currCapTg === "none";
  const isWoAcNone = cx.currCapAc === "none";
  const isWoTgVirtual = virtualVersatiles.includes(cx.currCapTg);
  const isWoTgShift = cx.currCapTg === "shift";
  const isWoCapable = capableCaps?.includes(cx.currCapAc);
  const isWoUsable = usableCaps?.includes(cx.currCapAc);
  const isWoFlexible = defaultAdjs?.includes(cx.currCapAc);

  const cdAcAn = cx.cdAcObj?.adjNou;
  const capPseudoRef = cx.cdAcObj?.capPseudoRef;
  const isWoAcSd = !!cdAcAn;

  const acTgsSet = new Set(usedPrfs?.map((obj) => `${obj?.ac}|${obj?.tg}`));
  const easyCurrAdjTgObj = easyObj[cx.currCapTg];

  const toggleVirtual = (x) => {
    cx.setUsedItms((prev) => {
      if (prev.includes(x)) {
        return prev.filter((item) => item !== x);
      } else {
        return [...prev, x];
      }
    });
  };

  return {
    capPseudoRef,
    cdAcAn,
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
