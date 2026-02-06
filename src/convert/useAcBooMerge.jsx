import useCtx from "../context/useCtx.jsx";
import useAcBoo from "./useAcBoo.jsx";

const useAcBooMerge = ({ posiId }) => {
  const boo = useAcBoo({ posiId });
  const ctx = useCtx();

  const isReturn = boo.isAlphabetNumber && ctx.isWoAcNone;

  return {
    isReturn,
  };
};

export default useAcBooMerge;
