import useCtx from "../context/useCtx.jsx";
const useAcLdBoo = ({ props2 }) => {
  const ctx = useCtx();

  const isHd = ctx.hdAcLdObj?.uniqueKey === props2.uniqueKey;
  return { isHd };
};

export default useAcLdBoo;
