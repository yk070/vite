import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";
const useTgRoo = ({ posiId }) => {
  const ctx = useCtx();
  const originNou = EnterObj[posiId] ?? posiId;
  const originAdjNou = ctx.currentAdjTg + "*" + originNou;

  const assignAdjNou = ctx.preferences.find(
    (obj) => obj.tg === originAdjNou,
  )?.ac;

  const tgAdjLdHdAcAdjNou = ctx.hdTgAdjLdObj?.objs?.find(
    (obj) => obj.tg === originAdjNou,
  )?.ac;
  // console.log(ctx.hdAcLdObj?.adjObj?.acTgObjs);
  const acLdHdAcAdjNou = ctx.hdAcLdObj?.acTgObjs?.find(
    (obj) => obj.tg === originAdjNou,
  )?.ac;
  const cdMultiList = Array.isArray(ctx.cdTgAdjLdObj?.objs)
    ? ctx.cdTgAdjLdObj?.objs
    : [];
  const multiCdAcAdjNou = cdMultiList?.find(
    (cdmultiObj) => cdmultiObj.tg === originAdjNou,
  )?.ac;

  return {
    originNou,
    originAdjNou,
    assignAdjNou,
    tgAdjLdHdAcAdjNou,
    multiCdAcAdjNou,
    acLdHdAcAdjNou,
  };
};

export default useTgRoo;
