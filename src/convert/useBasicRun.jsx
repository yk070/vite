import useCtx from "../context/useCtx.jsx";
const useBasicRun = ({ modKey }) => {
  const ctx = useCtx();

  const click = () => {
    if (ctx.isWoAcSd) {
      ctx.setSdAcModKey(null);
    } else {
      ctx.setSdAcModKey(modKey);
    }
  };

  const hover = () => {
    ctx.setHdModKeyAc(modKey);
  };
  const leave = () => {
    ctx.setHdModKeyAc(null);
  };

  return { click, hover, leave };
};

export default useBasicRun;
