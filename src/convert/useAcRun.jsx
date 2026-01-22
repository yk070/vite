import useAcRoo from "./useAcRoo.jsx";
import tone from "../style/color.jsx";
import useCtx from "../context/useCtx.jsx";
const useAcRun = ({ ButtonObj }) => {
  const roo = useAcRoo({ ButtonObj });
  const ctx = useCtx();

  const click = () => {
    if (ctx.isWoAcSd) {
      ctx.setSdAcModKey(null);
    } else {
      ctx.setSdAcModKey(roo.modKey);
    }
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
