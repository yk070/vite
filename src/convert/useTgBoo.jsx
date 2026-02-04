import { disabledAdjNous } from "../array/namedAdjNous.js";
import {
  alphabetNumberNous,
  allAdjectiveNous,
  virtualVersatiles,
} from "../array/namedArray.js";
import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import { adjAdjectiveNousObj } from "../obj/namedObj.js";

const useTgBoo = ({ posiId }) => {
  const roo = useTgRoo({ posiId });
  const ctx = useCtx();

  const isEnterBelow = posiId === "enter_below";
  const isHd = ctx.hdAdjNouTg === roo.originAdjNou;

  const isRemoteHovered = ctx.hdAdjNouTg === roo.assignAdjNou;
  const isAdjNouSame =
    allAdjectiveNous.includes(roo.originNou) &&
    adjAdjectiveNousObj[ctx.currCapTg]?.includes(roo.originNou);

  const isLocationUsed = ctx.prfs.some((obj) => obj.tg === roo.originAdjNou);
  const isFunctionUsed = ctx.prfs.some((obj) => obj.ac === roo.originAdjNou);

  const isSoSpaHold = ctx.isWoSpaHold && roo.originAdjNou === "none*space";
  const isSoMuhHold = ctx.isWoMuhHold && roo.originAdjNou === "none*muhenkan";
  const isSoVirtualHold = isSoSpaHold || isSoMuhHold;

  const isVacant =
    (isFunctionUsed && !isLocationUsed) ||
    (ctx.isWoTgVirtual && !isLocationUsed);
  const isUnusable = !isFunctionUsed && isLocationUsed;

  const isAssigned = !!roo.assignAdjNou;
  const isDisabled = disabledAdjNous.includes(roo.originAdjNou);
  const isAlphabetNumber = alphabetNumberNous.includes(roo.originNou);
  const isReturn = isAlphabetNumber && (ctx.isWoTgNone || ctx.isWoTgShift);

  const isEmptyLabel = isVacant || isEnterBelow || isAdjNouSame;

  const isCursorPointer = !isDisabled && ctx.isWoAcSd && !isAdjNouSame;

  const isStablePseudoHd = !!roo.stableHdAcAdjNou;

  const isCapablePseudoHd = !!roo.capableHdAcAdjNou;

  const isCapableBlockPseudoHd = ctx.hdCapableAdjNous?.includes(
    roo.originAdjNou,
  );
  const isHomeNoun = ["f", "j"].includes(roo.originNou);

  const isVirtual = virtualVersatiles.includes(roo.originNou);

  const isHighZ = isHd || isCapablePseudoHd || isAdjNouSame;

  return {
    isVirtual,
    isAssigned,
    isSoVirtualHold,
    isDisabled,
    isHd,
    isAdjNouSame,
    isReturn,
    isLocationUsed,
    isFunctionUsed,
    isRemoteHovered,
    isEmptyLabel,
    isCursorPointer,
    isStablePseudoHd,
    isUnusable,
    isVacant,
    isEnterBelow,
    isSoSpaHold,
    isSoMuhHold,
    isHomeNoun,
    isCapablePseudoHd,
    isCapableBlockPseudoHd,
    isHighZ,
  };
};

export default useTgBoo;
