import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";
const useTgRoo = ({ posiId }) => {
  const ctx = useCtx();
  const originKey = EnterObj[posiId] ?? posiId;
  const originAdjNou = ctx.currentAdjTg + "*" + originKey;

  const assignAdjNou = ctx.acTgObjs.find((obj) => obj.tg === originAdjNou)?.ac;

  const multiHdAcAdjNou = ctx.hdMultiObj?.objs?.find(
    (hdMiniObj) => hdMiniObj.tg === originAdjNou,
  )?.ac;
  const cdMultiList = Array.isArray(ctx.cdMultiObjs?.objs)
    ? ctx.cdMultiObjs?.objs
    : [];
  const multiCdAcAdjNou = cdMultiList?.find(
    (cdMultiObj) => cdMultiObj.tg === originAdjNou,
  )?.ac;

  return {
    originKey,
    originAdjNou,
    assignAdjNou,
    multiHdAcAdjNou,
    multiCdAcAdjNou,
  };
};

export default useTgRoo;
