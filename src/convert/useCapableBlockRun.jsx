import useCtx from "../context/useCtx.jsx";
const useCapableBlockRun = ({ pHalf }) => {
  const ctx = useCtx();

  const hover = () => {
    ctx.setHdCapableBlockAdj(pHalf.adj);
  };

  const leave = () => {
    ctx.setHdCapableBlockAdj(null);
  };
  return { hover, leave };
};

export default useCapableBlockRun;
