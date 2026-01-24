import useAcRoo from "./useAcRoo.jsx";
import useAcBoo from "./useAcBoo.jsx";
import useCtx from "../context/useCtx.jsx";
const useAcRun = ({ preKey }) => {
  const roo = useAcRoo({ preKey });
  const boo = useAcBoo({ preKey });
  const ctx = useCtx();

  const click = () => {
    if (boo.isDisabled) return;
    if (ctx.isWoAcSd) {
      ctx.setSdAcModKey(null);
      return;
    }
    ctx.setSdAcModKey(roo.modKey);
  };

  const hover = () => {
    ctx.setHdModKeyAc(roo.modKey);
  };
  const leave = () => {
    ctx.setHdModKeyAc(null);
  };
  return { click, hover, leave };
};

export default useAcRun;
