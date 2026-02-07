import useCtx from "../context/useCtx.jsx";
import useAcBoo from "./useAcBoo.jsx";

const useAcBooMerge = ({ posiId }) => {
  const boo = useAcBoo({ posiId });
  const ctx = useCtx();

  const isReturn = boo.isAlphabetNumber && ctx.isWoAcNone;

  const isSoVirtualHold = boo.isAdjNouVirtual && boo.isNouExploited;
  const isPreAlert = boo.isLocationUsed || isSoVirtualHold;
  const isAlert = isPreAlert && !boo.isFunctionUsed && !boo.isEnterBelow;

  return {
    isReturn,
    isAlert,
  };
};

export default useAcBooMerge;
