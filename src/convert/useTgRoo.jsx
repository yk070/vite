import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";
const useTgRoo = ({ posiId }) => {
  const ctx = useCtx();
  const originNou = EnterObj[posiId] ?? posiId;
  const originAdjNou = ctx.currCapTg + "*" + originNou;

  const assignAdjNou = ctx.prfs.find((obj) => obj.tg === originAdjNou)?.ac;

  const stableHdAcAdjNou = ctx.hdStableObj?.objs?.find(
    (obj) => obj.tg === originAdjNou,
  )?.ac;
  const capableHdAcAdjNou =
    ctx.hdCapablePrf?.tg === originAdjNou ? ctx.hdCapablePrf.ac : undefined;

  const cdMultiList = Array.isArray(ctx.cdStableObjs?.objs)
    ? ctx.cdStableObjs?.objs
    : [];
  const multiCdAcAdjNou = cdMultiList?.find(
    (cdmultiObj) => cdmultiObj.tg === originAdjNou,
  )?.ac;

  return {
    originNou,
    originAdjNou,
    assignAdjNou,
    stableHdAcAdjNou,
    multiCdAcAdjNou,
    capableHdAcAdjNou,
  };
};

export default useTgRoo;
