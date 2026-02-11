import useAcRoo from "./useAcRoo.jsx";
import useAcBoo from "./useAcBoo.jsx";
import useCtx from "../context/useCtx.jsx";
const useAcRun = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const boo = useAcBoo({ posiId });
  const ctx = useCtx();

  const click = () => {
    if (boo.isDisabled) return;
    if (ctx.isWoAcSd) {
      ctx.setCdAcObj(null);
      return;
    }
    ctx.setCdAcObj({ adjNou: roo.adjNou, capPseudoRef: ctx.currCapTg });
  };

  const hover = () => {
    ctx.setHdAdjNouAc(roo.adjNou);
  };
  const leave = () => {
    ctx.setHdAdjNouAc(null);
  };
  return { click, hover, leave };
};

export default useAcRun;
