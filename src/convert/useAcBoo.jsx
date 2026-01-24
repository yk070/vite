import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
import { importantModKeys } from "../array/namedModKeys.js";
import { disabledModKeys } from "../array/namedModKeys.js";
const useAcBoo = ({ preKey }) => {
  const roo = useAcRoo({ preKey });
  const ctx = useCtx();

  const isEnterBelow = roo.preKey === "enter_below";
  const isActive = ctx.sdAcModKey === roo.modKey;

  const isFunctionUsed =
    !isEnterBelow && ctx.acTgObjs?.some((actgObj) => actgObj.ac === roo.modKey);
  const isLocationUsed = ctx.acTgObjs?.some(
    (actgObj) => actgObj.tg === roo.modKey,
  );
  const isAlert = isLocationUsed && !isFunctionUsed && !isEnterBelow;

  const isHd = ctx.hdModKeyAc === roo.modKey;

  const isImportant = importantModKeys.includes(roo.modKey);
  const isDisabled = disabledModKeys.includes(roo.modKey);
  return {
    isEnterBelow,
    isActive,
    isFunctionUsed,
    isAlert,
    isHd,
    isImportant,
    isDisabled,
  };
};

export default useAcBoo;
