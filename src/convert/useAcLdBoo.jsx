import useCtx from "../context/useCtx.jsx";
const useAcLdBoo = ({ props }) => {
  const ctx = useCtx();

  const isHd = ctx.hdAcLdObj?.uniqueKey === props.uniqueKey;
  return { isHd };
};

export default useAcLdBoo;
