import useCtx from "../context/useCtx.jsx";
import useCapableRoo from "../convert/useCapableRoo.jsx";
const useCapableBoo = ({ pBlock }) => {
  const ctx = useCtx();
  const roo = useCapableRoo({ pBlock });

  const hover = () => {
    ctx.setHdsingleObj({
      id: roo.id,
      prfs: pBlock.prfs,
    });
  };
  const leave = () => {
    ctx.setHdsingleObj(null);
  };

  const click = () => {
    ctx.setCdsingleObj({ adj: pBlock.adj, prfs: pBlock.prfs });
  };

  return { hover, leave, click };
};

export default useCapableBoo;
