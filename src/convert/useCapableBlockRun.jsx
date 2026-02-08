import useCtx from "../context/useCtx.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
const useCapableBlockRun = ({ pHead }) => {
  const ctx = useCtx();
  const roo = useCapableBlockRoo({ pHead });

  const hover = () => {
    ctx.setHdBlockObj({ adj: pHead.adj, prfs: pHead.prfs });
  };

  const leave = () => {
    ctx.setHdBlockObj(null);
  };
  return { hover, leave };
};

export default useCapableBlockRun;
