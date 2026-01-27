import useCtx from "../context/useCtx.jsx";
const useBasicBoo = ({ adjNou }) => {
  const ctx = useCtx();

  const isActive = ctx.sdAcAdjNou === adjNou;
  const isHd = ctx.hdAdjNouAc === adjNou;

  const isFunctionUsed = ctx.preferences?.some(
    (actgObj) => actgObj.ac === adjNou,
  );
  const isLocationUsed = ctx.preferences?.some(
    (actgObj) => actgObj.tg === adjNou,
  );
  const isAlert = isLocationUsed && !isFunctionUsed;

  return { isActive, isHd, isAlert, isFunctionUsed };
};

export default useBasicBoo;
