import { allAdjectiveNous } from "../array/namedArray.js";
import { adjAdjectiveNousObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";

const useIsAnSame = (nou) => {
  const cx = useCtx();
  return (
    allAdjectiveNous.includes(nou) &&
    adjAdjectiveNousObj[cx.currCapTg]?.includes(nou)
  );
};
const useBlockPsHd = (adjNou) => {
  const cx = useCtx();
  return cx.hdAdjPrfs?.some((prf) => prf.tg === adjNou);
};

export { useIsAnSame, useBlockPsHd };
