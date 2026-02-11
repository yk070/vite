import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
import { importantAdjNous } from "../array/namedAdjNous.js";
import { disabledAdjNous } from "../array/namedAdjNous.js";
import { alphabetNumberNous, virtualAdjNous } from "../array/namedArray.js";
const useAcBoo = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const ctx = useCtx();

  //individual
  const isEnterBelow = roo.posiId === "enter_below";
  //some
  const isFunctionUsed = ctx.usedPrfs?.some(
    (actgObj) => actgObj.ac === roo.adjNou,
  );
  const isLocationUsed = ctx.usedPrfs?.some(
    (actgObj) => actgObj.tg === roo.adjNou,
  );
  //hd
  const isHd = ctx.hdAdjNouAc === roo.adjNou;
  //basic
  const isActive = ctx.cdAcAdjNou === roo.adjNou;
  //includes
  const isImportant = importantAdjNous.includes(roo.adjNou);
  const isDisabled = disabledAdjNous.includes(roo.adjNou);
  const isAlphabetNumber = alphabetNumberNous.includes(roo.originNou);
  const isAdjNouVirtual = virtualAdjNous.includes(roo.adjNou);
  const isNouExploited = ctx.usedAdjs?.includes(roo.originNou);

  return {
    isAdjNouVirtual,
    isNouExploited,
    isLocationUsed,
    isEnterBelow,
    isActive,
    isFunctionUsed,
    isHd,
    isImportant,
    isDisabled,
    isAlphabetNumber,
  };
};

export default useAcBoo;
