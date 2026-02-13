import useAcRoo from "./useAcRoo.jsx";
import useAcBoo from "./useAcBoo.jsx";
import useCtx from "../context/useCtx.jsx";
const useAcRun = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const boo = useAcBoo({ posiId });
  const cx = useCtx();

  const click = () => {
    if (boo.isDisabled) return;
    if (cx.isWoAcSd) {
      cx.setCdAcObj(null);
      return;
    }
    cx.setCdAcObj({ adjNou: roo.adjNou, capPseudoRef: cx.currCapTg });
  };

  const hover = () => {
    cx.setHdAnAc(roo.adjNou);
  };
  const leave = () => {
    cx.setHdAnAc(null);
  };
  return { click, hover, leave };
};

export default useAcRun;
