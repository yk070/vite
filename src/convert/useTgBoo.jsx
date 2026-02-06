import { disabledAdjNous } from "../array/namedAdjNous.js";
import { alphabetNumberNous, virtualVersatiles } from "../array/namedArray.js";
import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import { useIsAdjNouSame, useBlockPsHd } from "./namedConv.jsx";

const useTgBoo = ({ posiId }) => {
  const roo = useTgRoo({ posiId });
  const ctx = useCtx();

  //individual
  const isEnterBelow = posiId === "enter_below";
  const isSoSpaHold = ctx.isWoSpaHold && roo.originAdjNou === "none*space";
  const isSoMuhHold = ctx.isWoMuhHold && roo.originAdjNou === "none*muhenkan";
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
  const isVirtual = virtualVersatiles.includes(roo.originNou);

  return {
    isCapablePsHd,
    isBlockPsHd,
    isVirtual,
    isDisabled,
    isHd,
    isAdjNouSame,
    isLocationUsed,
    isFunctionUsed,
    isFunctionPsHd,
    isEnterBelow,
    isSoSpaHold,
    isSoMuhHold,
    isHomeNoun,
    isAlphabetNumber,
  };
};

export default useTgBoo;
