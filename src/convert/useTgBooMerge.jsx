import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useTgBoo from "./useTgBoo.jsx";

const useTgBooMerge = ({ posiId }) => {
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });
  const ctx = useCtx();

  const isSoVirtualHold = boo.isAdjNouVirtual && boo.isNouExploited;

  const isVacant =
    (boo.isFunctionUsed && !boo.isLocationUsed) ||
    (ctx.isWoTgVirtual && !boo.isLocationUsed);

  const isUnusable = !boo.isFunctionUsed && boo.isLocationUsed;

  const isAssigned = !!roo.assignAdjNou || isSoVirtualHold;

  const isReturn = boo.isAlphabetNumber && (ctx.isWoTgNone || ctx.isWoTgShift);

  const isEmptyLabel = isVacant || boo.isEnterBelow || boo.isAdjNouSame;

  const isCursorPointer = !boo.isDisabled && ctx.isWoAcSd && !boo.isAdjNouSame;

  const isHighZ = boo.isHd || boo.isCapablePsHd || boo.isAdjNouSame;

  return {
    isVacant,
    isUnusable,
    isAssigned,
    isReturn,
    isEmptyLabel,
    isCursorPointer,
    isHighZ,
    isSoVirtualHold,
  };
};

export default useTgBooMerge;
