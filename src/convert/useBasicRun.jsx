import useCtx from "../context/useCtx.jsx";
const useBasicRun = ({ adjNou }) => {
  const ctx = useCtx();

  const click = () => {
    if (ctx.isWoAcSd) {
      ctx.setSdAcAdjNou(null);
    } else {
      ctx.setSdAcAdjNou(adjNou);
    }
  };

  const hover = () => {
    ctx.setHdAdjNouAc(adjNou);
  };
  const leave = () => {
    ctx.setHdAdjNouAc(null);
  };

  return { click, hover, leave };
};

export default useBasicRun;
