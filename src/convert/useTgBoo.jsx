import { disabledAdjNous } from "../array/namedAdjNous.js";
import { alphabetNumberNous, allAdjectiveNous } from "../array/namedNous.js";
import easeObj from "../obj/easeObj.js";
import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import { adjAdjectiveNousObj } from "../obj/namedObj.js";

const useTgBoo = ({ posiId }) => {
  const roo = useTgRoo({ posiId });
  const ctx = useCtx();

  const isEnterBelow = posiId === "enter_below";
  const isHd = ctx.hdAdjNouTg === roo.originAdjNou;

  const isAwayHovered = ctx.hdAdjNouTg === roo.assignAdjNou;
  const isAdjNouSame =
    allAdjectiveNous.includes(roo.originKey) &&
    adjAdjectiveNousObj[ctx.currentAdjTg]?.includes(roo.originKey);

  const isLocationUsed = ctx.acTgObjs.some(
    (obj) => obj.tg === roo.originAdjNou,
  );
  const isFunctionUsed = ctx.acTgObjs.some(
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
  const isAlphabetNumber = alphabetNumberNous.includes(roo.originKey);
  const isReturn = isAlphabetNumber && (ctx.isWoTgNone || ctx.isWoTgShift);

  const isEmptyLabel = isVacant || isEnterBelow || isAdjNouSame;

  const isCursorPointer = !isDisabled && ctx.isWoAcSd && !isAdjNouSame;

  const isMultiPseudoHd = !!roo.multiHdAcAdjNou;
  // const isMultiCd = !!roo.multiCdAcAdjNou && !ctx.cdMultiObjs.isPickedBlock;

  const easeLevelObj = easeObj[ctx.currentAdjTg];
  function getLevel() {
    if (!ctx.isWoAcSd || isSoVirtualHold || isDisabled || isAssigned) return "";
    const entry = Object.entries(easeLevelObj)?.find(([_, nous]) =>
      nous?.includes(roo.originKey),
    );
    return entry?.[0] ?? "third";
  }
  const level = getLevel();
  return {
    isAssigned,
    isSoVirtualHold,
    isDisabled,
    isHd,
    isAdjNouSame,
    isReturn,
    isLocationUsed,
    isFunctionUsed,
    isAwayHovered,
    isEmptyLabel,
    isCursorPointer,
    isMultiPseudoHd,
    isUnusable,
    isVacant,
    level,
    isEnterBelow,
    isSoSpaHold,
    isSoMuhHold,
  };
};

export default useTgBoo;
