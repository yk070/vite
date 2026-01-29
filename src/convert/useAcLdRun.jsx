import useCtx from "../context/useCtx.jsx";
const useAcLdBoo = ({ props }) => {
  const ctx = useCtx();
  const hover = () => {
    ctx.setHdAcLdObj({
      uniqueKey: props.uniqueKey,
      adj: props.adj,
      acTgObjs: props.adjObj.acTgObjs,
    });
  };
  const leave = () => {
    ctx.setHdAcLdObj(null);
  };
  const click = () => {
    ctx.setCdAcLdObjs(props.adjObj.acTgObjs);
  };
  return { hover, leave, click };
};

export default useAcLdBoo;
