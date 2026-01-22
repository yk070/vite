import { EnterObj } from "../obj/namedObj.jsx";
import useCtx from "../context/useCtx.jsx";
import easeObj from "../obj/easeObj.jsx";
const useTgRoo = ({ buttonObj }) => {
  const ctx = useCtx();
  const style = buttonObj.style;
  const preKey = buttonObj.key;
  const originKey = EnterObj[preKey] ?? preKey;
  const originModKey = ctx.currentModTg + "*" + originKey;

  const assignModKey = ctx.AcTgObjs.find(
    (actgObj) => actgObj.tg === originModKey
  )?.ac;

  const multiHdAcModKey = ctx.hdMultiObj?.objs?.find(
    (hdMiniObj) => hdMiniObj.tg === originModKey
  )?.ac;
  const cdMultiList = Array.isArray(ctx.cdMultiObjs?.objs)
    ? ctx.cdMultiObjs?.objs
    : [];
  const multiCdAcModKey = cdMultiList?.find(
    (cdMultiObj) => cdMultiObj.tg === originModKey
  )?.ac;

  return {
    style,
    preKey,
    originKey,
    originModKey,
    assignModKey,
    multiHdAcModKey,
    multiCdAcModKey,
  };
};

export default useTgRoo;
