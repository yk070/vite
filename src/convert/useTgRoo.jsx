import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";
const useTgRoo = ({ posiId }) => {
  const ctx = useCtx();
  const originNou = EnterObj[posiId] ?? posiId;
  const originAdjNou = ctx.currCapTg + "*" + originNou;

  const assignAdjNou = ctx.usedPrfs.find((obj) => obj.tg === originAdjNou)?.ac;

  const moHdAdjNou =
    ctx.hdMoPrf?.tg === originAdjNou ? ctx.hdMoPrf.ac : undefined;

  const poHdAdjNou = ctx.hdPoPrfs?.find((prf) => prf.tg === originAdjNou)?.ac;

  return {
    poHdAdjNou,
    originNou,
    originAdjNou,
    assignAdjNou,
    moHdAdjNou,
  };
};

export default useTgRoo;
