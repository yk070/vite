import useCtx from "../context/useCtx.jsx";
import useAcRoo from "./useAcRoo.jsx";
const useAcBoo = ({ ButtonObj }) => {
  const roo = useAcRoo({ ButtonObj });
  const ctx = useCtx();

  const isEnterBelow = roo.preKey === "enter_below";
  const isActive = ctx.sdAcModKey === roo.modKey;

  const isFunctionUsed = ctx.AcTgObjs?.some(
    (actgObj) => actgObj.ac === roo.modKey,
  );
  const isLocationUsed = ctx.AcTgObjs?.some(
    (actgObj) => actgObj.tg === roo.modKey,
  );
  const isAlert = isLocationUsed && !isFunctionUsed;

  const isHd = ctx.hdModKeyAc === roo.modKey;

  return {
    isEnterBelow,
    isActive,
    isFunctionUsed,
    isAlert,
    isHd,
  };
};

export default useAcBoo;
