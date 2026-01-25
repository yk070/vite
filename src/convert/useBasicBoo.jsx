import useCtx from "../context/useCtx.jsx";
const useBasicBoo = ({ adjKey }) => {
  const ctx = useCtx();

  const isActive = ctx.sdAcAdjNou === adjKey;
  const isHd = ctx.hdAdjNouAc === adjKey;

  const isFunctionUsed = ctx.acTgObjs?.some((actgObj) => actgObj.ac === adjKey);
  const isLocationUsed = ctx.acTgObjs?.some((actgObj) => actgObj.tg === adjKey);
  const isAlert = isLocationUsed && !isFunctionUsed;

  return { isActive, isHd, isAlert, isFunctionUsed };
};

export default useBasicBoo;
