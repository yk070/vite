import { EnterObj } from "../obj/namedObj.js";
import useCtx from "../context/useCtx.jsx";
const useTgRoo = ({ preKey }) => {
  const ctx = useCtx();
  const originKey = EnterObj[preKey] ?? preKey;
  const originModKey = ctx.currentModTg + "*" + originKey;

  const assignModKey = ctx.acTgObjs.find((obj) => obj.tg === originModKey)?.ac;

  const multiHdAcModKey = ctx.hdMultiObj?.objs?.find(
    (hdMiniObj) => hdMiniObj.tg === originModKey,
  )?.ac;
  const cdMultiList = Array.isArray(ctx.cdMultiObjs?.objs)
    ? ctx.cdMultiObjs?.objs
    : [];
  const multiCdAcModKey = cdMultiList?.find(
    (cdMultiObj) => cdMultiObj.tg === originModKey,
  )?.ac;

  return {
    originKey,
    originModKey,
    assignModKey,
    multiHdAcModKey,
    multiCdAcModKey,
  };
};

export default useTgRoo;
