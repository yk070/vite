import useCtx from "../context/useCtx.jsx";
const useCapableBlockRoo = ({ pHalf }) => {
  const ctx = useCtx();

  const hdObj = { adj: pHalf.adj, prfss: pHalf.prfss };
  return { hdObj };
};

export default useCapableBlockRoo;
