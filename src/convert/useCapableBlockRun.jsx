import useCtx from "../context/useCtx.jsx";
const useCapableBlockRun = ({ pHalf }) => {
  const ctx = useCtx();

  const hover = () => {
    ctx.setHdBlockObj({ adj: pHalf.adj, prfss: pHalf.prfss });
  };

  const leave = () => {
    ctx.setHdBlockObj(null);
  };
  return { hover, leave };
};

export default useCapableBlockRun;
