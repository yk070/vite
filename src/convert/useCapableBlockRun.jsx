import useCtx from "../context/useCtx.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
const useCapableBlockRun = ({ pHalf }) => {
  const ctx = useCtx();
  const roo = useCapableBlockRoo({ pHalf });

  const hover = () => {
    ctx.setHdCapableBlockObj(roo.hdObj);
  };

  const leave = () => {
    ctx.setHdCapableBlockObj(null);
  };
  return { hover, leave };
};

export default useCapableBlockRun;
