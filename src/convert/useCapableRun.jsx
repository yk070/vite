import useCtx from "../context/useCtx.jsx";
const useCapableBoo = ({ pBlock }) => {
  const ctx = useCtx();
  const hover = () => {
    ctx.setHdCapableObj({
      id: pBlock.id,
      preferences: pBlock.preferences,
    });
  };
  const leave = () => {
    ctx.setHdCapableObj(null);
  };
  const click = () => {
    ctx.setCdCapableObj({ adj: pBlock.adj, preferences: pBlock.preferences });
  };
  return { hover, leave, click };
};

export default useCapableBoo;
