import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
import { importantModNous } from "../array/namedModNous.js";
import { disabledModNous } from "../array/namedModNous.js";
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

  const isImportant = importantModNous.includes(roo.modKey);
  const isDisabled = disabledModNous.includes(roo.modKey);
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
