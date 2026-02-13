import useCtx from "../context/useCtx.jsx";
import useAcBoo from "./useAcBoo.jsx";

const useAcBooMerge = ({ posiId }) => {
  const boo = useAcBoo({ posiId });
  const cx = useCtx();

  const isReturn = boo.isAlphabetNumber && cx.isWoAcNone;

  const isSoVirtualHold = boo.isAnVirtual && boo.isNouExploited;
  const isPreAlert = boo.isLocationUsed || isSoVirtualHold;
  const isAlert = isPreAlert && !boo.isFunctionUsed && !boo.isEnterBelow;

  return {
    isReturn,
    isAlert,
  };
};

export default useAcBooMerge;
