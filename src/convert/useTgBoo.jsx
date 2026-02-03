import { disabledAdjNous } from "../array/namedAdjNous.js";
import {
  alphabetNumberNous,
  allAdjectiveNous,
  virtualVerstiles,
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
    adjAdjectiveNousObj[ctx.currAdjTg]?.includes(roo.originNou);

  const isLocationUsed = ctx.preferences.some(
    (obj) => obj.tg === roo.originAdjNou,
  );
  const isFunctionUsed = ctx.preferences.some(
    (obj) => obj.ac === roo.originAdjNou,
  );

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
  function getLevel() {
    if (
      (!ctx.isWoAcSd || isSoVirtualHold || isDisabled || isAssigned) &&
      !isCapableBlockPseudoHd
    )
      return "";
    const entry = Object.entries(ctx.easyCurrAdjTgObj)?.find(([_, nous]) =>
      nous?.includes(roo.originNou),
    );
    return entry?.[0] ?? "third";
  }
  const level = getLevel();
  const isHomeNoun = ["f", "j"].includes(roo.originNou);

  const isVirtual = virtualVerstiles.includes(roo.originNou);
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
    level,
    isEnterBelow,
    isSoSpaHold,
    isSoMuhHold,
    isHomeNoun,
    isCapablePseudoHd,
    isCapableBlockPseudoHd,
  };
};

export default useTgBoo;
