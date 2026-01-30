import useCtx from "../context/useCtx.jsx";
const useAcLdBoo = ({ props2 }) => {
  const ctx = useCtx();
  const hover = () => {
    ctx.setHdAcLdObj({
      uniqueKey: props2.uniqueKey,
      acTgObjs: props2.adjObj.acTgObjs,
    });
  };
  const leave = () => {
    ctx.setHdAcLdObj(null);
  };
  const click = () => {
    ctx.setCdAcLdObjs(props2.adjObj.acTgObjs);
  };
  return { hover, leave, click };
};

export default useAcLdBoo;
