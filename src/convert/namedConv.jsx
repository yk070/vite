import { allAdjectiveNous } from "../array/namedArray.js";
import { adjAdjectiveNousObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";

const useIsAdjNouSame = (nou) => {
  const ctx = useCtx();
  return (
    allAdjectiveNous.includes(nou) &&
    adjAdjectiveNousObj[ctx.currCapTg]?.includes(nou)
  );
};
const useBlockPsHd = (adjNou) => {
  const ctx = useCtx();
  return ctx.hdBlockPrfss?.some((innerArr) =>
    innerArr.some((obj) => obj.tg === adjNou),
  );
};

export { useIsAdjNouSame, useBlockPsHd };
