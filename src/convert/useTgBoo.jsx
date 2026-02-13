import { disabledAns } from "../array/namedAns.js";
import { alphabetNumberNous, virtualAns } from "../array/namedArray.js";
import useCtx from "../context/useCtx.jsx";
import useTgRoo from "./useTgRoo.jsx";
import { useIsAnSame, useBlockPsHd } from "./namedConv.jsx";

const useTgBoo = ({ posiId }) => {
  const cx = useCtx();
  const roo = useTgRoo({ posiId });

  const isTarget =
    roo.mattchedPrf != null &&
    cx.hdPoAaPrf != null &&
    JSON.stringify(roo.mattchedPrf) === JSON.stringify(cx.hdPoAaPrf);

  //individual
  const isEnterBelow = posiId === "enter_below";
  //hd
  const isMoPsHd = cx.hdMoPrf?.tg === roo.rawAn;
  const isPoPsHd = !!roo.poHdAn;
  const isBlockPsHd = useBlockPsHd(roo.rawAn);

  const isHd = cx.hdAnTg === roo.rawAn;
  const isFunctionPsHd = cx.hdAnTg === roo.fakeAn;
  //use
  const isAnSame = useIsAnSame(roo.rawNou);
  //some
  const isLocationUsed = cx.usedPrfs.some((obj) => obj.tg === roo.rawAn);
  const isFunctionUsed = cx.usedPrfs.some((obj) => obj.ac === roo.rawAn);
  //includes
  const isDisabled = disabledAns.includes(roo.rawAn);
  const isAlphabetNumber = alphabetNumberNous.includes(roo.rawNou);
  const isHomeNoun = ["f", "j"].includes(roo.rawNou);
  const isAnVirtual = virtualAns.includes(roo.rawAn);
  const isNouExploited = cx.usedAdjs?.includes(roo.rawNou);

  return {
    isTarget,
    isPoPsHd,
    isAnVirtual,
    isNouExploited,
    isMoPsHd,
    isBlockPsHd,
    isDisabled,
    isHd,
    isAnSame,
    isLocationUsed,
    isFunctionUsed,
    isFunctionPsHd,
    isEnterBelow,
    isHomeNoun,
    isAlphabetNumber,
  };
};

export default useTgBoo;
