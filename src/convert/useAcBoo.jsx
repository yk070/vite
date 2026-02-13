import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
import { importantAns } from "../array/namedAns.js";
import { disabledAns } from "../array/namedAns.js";
import { alphabetNumberNous, virtualAns } from "../array/namedArray.js";
const useAcBoo = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const cx = useCtx();

  //individual
  const isEnterBelow = roo.posiId === "enter_below";
  //some
  const isFunctionUsed = cx.usedPrfs?.some(
    (actgObj) => actgObj.ac === roo.adjNou,
  );
  const isLocationUsed = cx.usedPrfs?.some(
    (actgObj) => actgObj.tg === roo.adjNou,
  );
  //hd
  const isHd = cx.hdAnAc === roo.adjNou;
  //basic
  const isActive = cx.cdAcAn === roo.adjNou;
  //includes
  const isImportant = importantAns.includes(roo.adjNou);
  const isDisabled = disabledAns.includes(roo.adjNou);
  const isAlphabetNumber = alphabetNumberNous.includes(roo.rawNou);
  const isAnVirtual = virtualAns.includes(roo.adjNou);
  const isNouExploited = cx.usedAdjs?.includes(roo.rawNou);

  return {
    isAnVirtual,
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
