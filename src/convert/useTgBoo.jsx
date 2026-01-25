import { disabledModKeys } from "../array/namedModKeys.js";
import { alphabetNumberKeys, allCombiKeys } from "../array/namedKeys.js";
import easeObj from "../obj/easeObj.js";
import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";

const useTgBoo = ({ preKey }) => {
  const roo = useTgRoo({ preKey });
  const ctx = useCtx();

  const isEnterBelow = preKey === "enter_below";
  const isHd = ctx.hdModKeyTg === roo.originModKey;

  const isAwayHovered = ctx.hdModKeyTg === roo.assignModKey;
  const isModKeySame =
    allCombiKeys.includes(roo.originKey) &&
    roo.originKey.includes(ctx.currentModTg);

  const isLocationUsed = ctx.acTgObjs.some(
    (obj) => obj.tg === roo.originModKey,
  );
  const isFunctionUsed = ctx.acTgObjs.some(
    (obj) => obj.ac === roo.originModKey,
  );

  const isSoSpaHold = ctx.isWoSpaHold && roo.originModKey === "none*space";
  const isSoMuhHold = ctx.isWoMuhHold && roo.originModKey === "none*muhenkan";
  const isSoVirtualHold = isSoSpaHold || isSoMuhHold;

  const isVacant = isFunctionUsed && !isLocationUsed;
  const isUnusable = !isFunctionUsed && isLocationUsed;

  const isAssigned = !!roo.assignModKey;
  const isDisabled = disabledModKeys.includes(roo.originModKey);
  const isAlphabetNumber = alphabetNumberKeys.includes(roo.originKey);
  const isReturn = isAlphabetNumber && (ctx.isWoTgNone || ctx.isWoTgShift);

  const isEmptyLabel = isVacant || isEnterBelow || isModKeySame;

  const isCursorPointer = !isDisabled && ctx.isWoAcSd && !isModKeySame;

  const isMultiPseudoHd = !!roo.multiHdAcModKey;
  // const isMultiCd = !!roo.multiCdAcModKey && !ctx.cdMultiObjs.isPickedBlock;

  const easeLevelObj = easeObj[ctx.currentModTg];
  function getLevel() {
    if (!ctx.isWoAcSd || isSoVirtualHold || isDisabled || isAssigned) return "";
    const entry = Object.entries(easeLevelObj)?.find(([_, keys]) =>
      keys?.includes(roo.originKey),
    );
    return entry?.[0] ?? "third";
  }
  const level = getLevel();
  return {
    isAssigned,
    isSoVirtualHold,
    isDisabled,
    isHd,
    isModKeySame,
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
