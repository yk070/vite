import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";
const useTgRoo = ({ posiId }) => {
  const ctx = useCtx();
  const originNou = EnterObj[posiId] ?? posiId;
  const originAdjNou = ctx.currentAdjTg + "*" + originNou;

  const assignAdjNou = ctx.preferences.find(
    (obj) => obj.tg === originAdjNou,
  )?.ac;

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
    originNou,
    originAdjNou,
    assignAdjNou,
    multiHdAcAdjNou,
    multiCdAcAdjNou,
  };
};

export default useTgRoo;
