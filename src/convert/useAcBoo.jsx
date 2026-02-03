import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
import { importantAdjNous } from "../array/namedAdjNous.js";
import { disabledAdjNous } from "../array/namedAdjNous.js";
import { alphabetNumberNous } from "../array/namedArray.js";
const useAcBoo = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const ctx = useCtx();

  const isEnterBelow = roo.posiId === "enter_below";
  const isActive = ctx.sdAcAdjNou === roo.adjNou;

  const isFunctionUsed =
    !isEnterBelow &&
    ctx.preferences?.some((actgObj) => actgObj.ac === roo.adjNou);
  const isLocationUsed = ctx.preferences?.some(
    (actgObj) => actgObj.tg === roo.adjNou,
  );
  const isAlert = isLocationUsed && !isFunctionUsed && !isEnterBelow;

  const isHd = ctx.hdAdjNouAc === roo.adjNou;

  const isImportant = importantAdjNous.includes(roo.adjNou);
  const isDisabled = disabledAdjNous.includes(roo.adjNou);

  const isAlphabetNumber = alphabetNumberNous.includes(roo.originNou);
  const isReturn = isAlphabetNumber && ctx.isWoAcNone;
  return {
    isEnterBelow,
    isActive,
    isFunctionUsed,
    isAlert,
    isHd,
    isImportant,
    isDisabled,
    isReturn,
  };
};

export default useAcBoo;
