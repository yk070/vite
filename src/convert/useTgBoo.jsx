import { DisabledModKeys } from "../array/namedModKeys.jsx";
import {
  ModifierKeys,
  AlphabetNumberKeys,
  VirtualModifierKeys,
} from "../array/namedKeys.jsx";
import easeObj from "../obj/easeObj.jsx";
import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import TgButton from "../area/TgButton.jsx";
const useTgBoo = ({ buttonObj }) => {
  const roo = useTgRoo({ buttonObj });
  const ctx = useCtx();

  const isEnterBelow = roo.preKey === "enter_below";
  const isHd = ctx.hdModKeyTg === roo.originModKey;

  const isAwayHovered = ctx.hdModKeyTg === roo.assignModKey;
  const isModKeySame =
    [...ModifierKeys, ...VirtualModifierKeys].includes(roo.originKey) &&
    roo.originKey.includes(ctx.currentModTg);

  const isLocationUsed = ctx.AcTgObjs.some(
    (actgObj) => actgObj.tg === roo.originModKey,
  );
  const isFunctionUsed = ctx.AcTgObjs.some(
    (actgObj) => actgObj.ac === roo.originModKey,
  );

  const isSoSpaceHold = ctx.isWoSpaceHold && roo.originModKey === "none*space";

  const isVacant = isFunctionUsed && !isLocationUsed;
  const isUnusable = !isFunctionUsed && isLocationUsed;

  const isAssigned = !!roo.assignModKey;
  const isDisabled = DisabledModKeys.includes(roo.originModKey);
  const isAlphabetNumber = AlphabetNumberKeys.includes(roo.originKey);
  const isNoneAlphabetNumber = isAlphabetNumber && ctx.isWoTgNone;

  const isEmptyLabel = isVacant || isEnterBelow || isModKeySame;

  const isCursorPointer = !isDisabled && ctx.isWoAcSd && !isModKeySame;

  const isMultiPseudoHd = !!roo.multiHdAcModKey;
  // const isMultiCd = !!roo.multiCdAcModKey && !ctx.cdMultiObjs.isPickedBlock;

  const easeLevelObj = easeObj[ctx.currentModTg];
  function getLevel() {
    if (
      // !ctx.isWoAcSd ||
      isSoSpaceHold ||
      isDisabled ||
      isAssigned
    )
      return "";
    const entry = Object.entries(easeLevelObj)?.find(([_, keys]) =>
      keys?.includes(roo.originKey),
    );
    return entry?.[0] ?? "third";
  }
  const level = getLevel();
  return {
    isAssigned,
    isSoSpaceHold,
    isDisabled,
    isHd,
    isModKeySame,
    isNoneAlphabetNumber,
    isLocationUsed,
    isFunctionUsed,
    isAwayHovered,
    isEmptyLabel,
    isCursorPointer,
    isMultiPseudoHd,
    isUnusable,
    isVacant,
    level,
  };
};

export default useTgBoo;
