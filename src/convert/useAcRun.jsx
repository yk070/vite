import useAcRoo from "./useAcRoo.jsx";
import useAcBoo from "./useAcBoo.jsx";
import useCtx from "../context/useCtx.jsx";
const useAcRun = ({ ButtonObj }) => {
  const roo = useAcRoo({ ButtonObj });
  const boo = useAcBoo({ ButtonObj });
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
