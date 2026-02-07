import { disabledAdjNous } from "../array/namedAdjNous.js";
import { alphabetNumberNous, virtualAdjNous } from "../array/namedArray.js";
import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import { useIsAdjNouSame, useBlockPsHd } from "./namedConv.jsx";

const useTgBoo = ({ posiId }) => {
  const roo = useTgRoo({ posiId });
  const ctx = useCtx();

  //individual
  const isEnterBelow = posiId === "enter_below";
  //hd
  const isCapablePsHd = !!roo.capableHdAcAdjNou;
  const isBlockPsHd = useBlockPsHd(roo.originAdjNou);
  const isHd = ctx.hdAdjNouTg === roo.originAdjNou;
  const isFunctionPsHd = ctx.hdAdjNouTg === roo.assignAdjNou;
  //use
  const isAdjNouSame = useIsAdjNouSame(roo.originNou);
  //some
  const isLocationUsed = ctx.prfs.some((obj) => obj.tg === roo.originAdjNou);
  const isFunctionUsed = ctx.prfs.some((obj) => obj.ac === roo.originAdjNou);
  //includes
  const isDisabled = disabledAdjNous.includes(roo.originAdjNou);
  const isAlphabetNumber = alphabetNumberNous.includes(roo.originNou);
  const isHomeNoun = ["f", "j"].includes(roo.originNou);
  const isAdjNouVirtual = virtualAdjNous.includes(roo.originAdjNou);
  const isNouExploited = ctx.exploitedAdjs?.includes(roo.originNou);

  return {
    isAdjNouVirtual,
    isNouExploited,
    isCapablePsHd,
    isBlockPsHd,
    isDisabled,
    isHd,
    isAdjNouSame,
    isLocationUsed,
    isFunctionUsed,
    isFunctionPsHd,
    isEnterBelow,
    isHomeNoun,
    isAlphabetNumber,
  };
};

export default useTgBoo;
