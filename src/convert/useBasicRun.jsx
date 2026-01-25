import useCtx from "../context/useCtx.jsx";
const useBasicRun = ({ adjKey }) => {
  const ctx = useCtx();

  const click = () => {
    if (ctx.isWoAcSd) {
      ctx.setSdAcAdjNou(null);
    } else {
      ctx.setSdAcAdjNou(adjKey);
    }
  };

  const hover = () => {
    ctx.setHdAdjNouAc(adjKey);
  };
  const leave = () => {
    ctx.setHdAdjNouAc(null);
  };

  return { click, hover, leave };
};

export default useBasicRun;
