import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
import { importantAdjNous } from "../array/namedAdjNous.js";
import { disabledAdjNous } from "../array/namedAdjNous.js";
import { alphabetNumberNous } from "../array/namedArray.js";
const useAcBoo = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const ctx = useCtx();

  //individual
  const isEnterBelow = roo.posiId === "enter_below";
  //some
  const isFunctionUsed = ctx.prfs?.some((actgObj) => actgObj.ac === roo.adjNou);
  const isLocationUsed = ctx.prfs?.some((actgObj) => actgObj.tg === roo.adjNou);
  const isAlert = isLocationUsed && !isFunctionUsed && !isEnterBelow;
  //hd
  const isHd = ctx.hdAdjNouAc === roo.adjNou;
  //basic
  const isActive = ctx.cdAcAdjNou === roo.adjNou;
  //includes
  const isImportant = importantAdjNous.includes(roo.adjNou);
  const isDisabled = disabledAdjNous.includes(roo.adjNou);
  const isAlphabetNumber = alphabetNumberNous.includes(roo.originNou);

  return {
    isEnterBelow,
    isActive,
    isFunctionUsed,
    isAlert,
    isHd,
    isImportant,
    isDisabled,
    isAlphabetNumber,
  };
};

export default useAcBoo;
