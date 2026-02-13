import { disabledAdjNous } from "../array/namedAdjNous.js";
import { alphabetNumberNous, virtualAdjNous } from "../array/namedArray.js";
import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import { useIsAdjNouSame, useBlockPsHd } from "./namedConv.jsx";

const useTgBoo = ({ posiId }) => {
  const ctx = useCtx();
  const roo = useTgRoo({ posiId });

  const isTarget =
    roo.mattchedPrf != null &&
    ctx.hdPoAaPrf != null &&
    JSON.stringify(roo.mattchedPrf) === JSON.stringify(ctx.hdPoAaPrf);

  //individual
  const isEnterBelow = posiId === "enter_below";
  //hd
  const isMoPsHd = !!roo.moHdAdjNou;
  const isPoPsHd = !!roo.poHdAdjNou;
  const isBlockPsHd = useBlockPsHd(roo.originAdjNou);

  const isHd = ctx.hdAdjNouTg === roo.originAdjNou;
  const isFunctionPsHd = ctx.hdAdjNouTg === roo.assignAdjNou;
  //use
  const isAdjNouSame = useIsAdjNouSame(roo.originNou);
  //some
  const isLocationUsed = ctx.usedPrfs.some(
    (obj) => obj.tg === roo.originAdjNou,
  );
  const isFunctionUsed = ctx.usedPrfs.some(
    (obj) => obj.ac === roo.originAdjNou,
  );
  //includes
  const isDisabled = disabledAdjNous.includes(roo.originAdjNou);
  const isAlphabetNumber = alphabetNumberNous.includes(roo.originNou);
  const isHomeNoun = ["f", "j"].includes(roo.originNou);
  const isAdjNouVirtual = virtualAdjNous.includes(roo.originAdjNou);
  const isNouExploited = ctx.usedAdjs?.includes(roo.originNou);

  return {
    isTarget,
    isPoPsHd,
    isAdjNouVirtual,
    isNouExploited,
    isMoPsHd,
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
