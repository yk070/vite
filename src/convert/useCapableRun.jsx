import useCtx from "../context/useCtx.jsx";
import useCapableRoo from "../convert/useCapableRoo.jsx";
const useCapableBoo = ({ pBlock }) => {
  const ctx = useCtx();
  const roo = useCapableRoo({ pBlock });

  const hover = () => {
    ctx.setHdadjNouAdjNousObj({
      id: roo.id,
      prf: pBlock.prf,
    });
  };
  const leave = () => {
    ctx.setHdadjNouAdjNousObj(null);
  };

  const click = () => {
    ctx.setCdadjNouAdjNousObj({ adj: pBlock.adj, prf: pBlock.prf });
  };

  return { hover, leave, click };
};

export default useCapableBoo;
