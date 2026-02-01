import useCtx from "../context/useCtx.jsx";
const useCapableBoo = ({ pBlock }) => {
  const ctx = useCtx();
  const hover = () => {
    ctx.setHdCapableObj({
      id: pBlock.id,
      objs: pBlock.adjObjs,
    });
  };
  const leave = () => {
    ctx.setHdCapableObj(null);
  };
  const click = () => {
    ctx.setCdCapableObj({ adj: pBlock.adj, objs: pBlock.adjObjs });
  };
  return { hover, leave, click };
};

export default useCapableBoo;
