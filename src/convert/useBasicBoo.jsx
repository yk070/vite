import useCtx from "../context/useCtx.jsx";
const useBasicBoo = ({ modKey }) => {
  const ctx = useCtx();

  const isActive = ctx.sdAcModKey === modKey;
  const isHd = ctx.hdModKeyAc === modKey;

  const isFunctionUsed = ctx.AcTgObjs?.some((actgObj) => actgObj.ac === modKey);
  const isLocationUsed = ctx.AcTgObjs?.some((actgObj) => actgObj.tg === modKey);
  const isAlert = isLocationUsed && !isFunctionUsed;

  return { isActive, isHd, isAlert, isFunctionUsed };
};

export default useBasicBoo;
