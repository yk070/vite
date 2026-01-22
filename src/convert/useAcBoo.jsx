import AlertConvert from "./AlertConvert.jsx";
import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
const useAcBoo = ({ ButtonObj }) => {
  const roo = useAcRoo({ ButtonObj });
  const ctx = useCtx();

  const isActive = ctx.sdAcModKey === roo.modKey;
  const isAlert = AlertConvert(ctx.AcTgObjs, roo.modKey, ctx.isWoSpaceHold);
  const isHd = ctx.hdModKeyAc === roo.modKey;
  const isFunctionUsed = ctx.AcTgObjs.some((obj) => obj.ac === roo.modKey);

  return {
    isActive,
    isAlert,
    isHd,
    isFunctionUsed,
  };
};

export default useAcBoo;
