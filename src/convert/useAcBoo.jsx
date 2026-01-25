import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
import { importantAdjNous } from "../array/namedAdjNous.js";
import { disabledAdjNous } from "../array/namedAdjNous.js";
const useAcBoo = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const ctx = useCtx();

  const isEnterBelow = roo.posiId === "enter_below";
  const isActive = ctx.sdAcAdjNou === roo.adjKey;

  const isFunctionUsed =
    !isEnterBelow && ctx.acTgObjs?.some((actgObj) => actgObj.ac === roo.adjKey);
  const isLocationUsed = ctx.acTgObjs?.some(
    (actgObj) => actgObj.tg === roo.adjKey,
  );
  const isAlert = isLocationUsed && !isFunctionUsed && !isEnterBelow;

  const isHd = ctx.hdAdjNouAc === roo.adjKey;

  const isImportant = importantAdjNous.includes(roo.adjKey);
  const isDisabled = disabledAdjNous.includes(roo.adjKey);
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
