import useCtx from "../context/useCtx.jsx";
const useCapableBoo = ({ props2 }) => {
  const ctx = useCtx();
  const hover = () => {
    ctx.setHdCapableObj({
      id: props2.id,
      objs: props2.adjObj.objs,
    });
  };
  const leave = () => {
    ctx.setHdCapableObj(null);
  };
  const click = () => {
    ctx.setCdCapableObj({ adj: props2.adj, objs: props2.adjObj.objs });
  };
  return { hover, leave, click };
};

export default useCapableBoo;
