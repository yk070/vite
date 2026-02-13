import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useTgBoo from "./useTgBoo.jsx";

const useTgBooMerge = ({ posiId }) => {
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });
  const cx = useCtx();

  const isSoVirtualHold = boo.isAnVirtual && boo.isNouExploited;

  const isVacant =
    (boo.isFunctionUsed && !boo.isLocationUsed) ||
    (cx.isWoTgVirtual && !boo.isLocationUsed);

  const isUnusable = !boo.isFunctionUsed && boo.isLocationUsed;

  const isAssigned = !!roo.fakeAn || isSoVirtualHold;

  const isReturn = boo.isAlphabetNumber && (cx.isWoTgNone || cx.isWoTgShift);

  const isEmptyLabel = isVacant || boo.isEnterBelow || boo.isAnSame;

  const isCursorPointer = !boo.isDisabled && cx.isWoAcSd && !boo.isAnSame;

  const isHighZ = boo.isHd || boo.isMoPsHd || boo.isAnSame;

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
