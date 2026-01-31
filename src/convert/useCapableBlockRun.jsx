import useCtx from "../context/useCtx.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
const useCapableBlockRun = ({ props }) => {
  const ctx = useCtx();
  const roo = useCapableBlockRoo({ props });

  const hover = () => {
    ctx.setHdCapableBlockObj(roo.props3);
  };

  const leave = () => {
    ctx.setHdCapableBlockObj(null);
  };
  return { hover, leave };
};

export default useCapableBlockRun;
