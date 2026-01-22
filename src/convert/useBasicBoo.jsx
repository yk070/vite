import useCtx from "../context/useCtx.jsx";
import AlertConvert from "./AlertConvert.jsx";
const useBasicBoo = ({ modKey }) => {
  const ctx = useCtx();

  const isActive = ctx.sdAcModKey === modKey;
  const isHd = ctx.hdModKeyAc === modKey;
  const isAlert = AlertConvert(ctx.AcTgObjs, modKey, ctx.isWoSpaceHold);
  const isFunctionUsed = ctx.AcTgObjs.some((obj) => obj.ac === modKey);
  return { isActive, isHd, isAlert, isFunctionUsed };
};

export default useBasicBoo;
