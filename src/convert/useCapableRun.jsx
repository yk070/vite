import useCtx from "../context/useCtx.jsx";
import useCapableRoo from "../convert/useCapableRoo.jsx";
const useCapableBoo = ({ pBlock }) => {
  const ctx = useCtx();
  const roo = useCapableRoo({ pBlock });

  const hover = () => {
    ctx.setHdCapableObj({
      id: roo.id,
      prfs: pBlock.prfs,
    });
  };
  const leave = () => {
    ctx.setHdCapableObj(null);
  };

  const click = () => {
    ctx.setCdCapableObj({ adj: pBlock.adj, prfs: pBlock.prfs });
  };

  return { hover, leave, click };
};

export default useCapableBoo;
