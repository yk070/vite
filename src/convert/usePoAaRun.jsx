import useCtx from "../context/useCtx.jsx";
import usePoAaRoo from "./usePoAaRoo.jsx";

const usePoAaRun = ({ pAdjEl }) => {
  const cx = useCtx();
  const roo = usePoAaRoo({ pAdjEl });

  const hover = () => {
    cx.setHdPoObj({
      id: roo.id,
      prfs: pAdjEl.prfs,
      Prf: pAdjEl.moPrf,
    });
  };
  const leave = () => {
    cx.setHdPoObj(null);
  };
  const click = (e) => {
    e.stopPropagation();
    cx.setCdPoObj({
      prfs: pAdjEl.prfs,
      adj: pAdjEl.caAdj,
    });
  };
  return { hover, leave, click };
};

export default usePoAaRun;
