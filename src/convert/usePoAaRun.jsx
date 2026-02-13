import useCtx from "../context/useCtx.jsx";
import usePoAaRoo from "./usePoAaRoo.jsx";

const usePoAaRun = ({ pAdjEl }) => {
  const ctx = useCtx();
  const roo = usePoAaRoo({ pAdjEl });

  const hover = () => {
    ctx.setHdPoAaObj({
      id: roo.id,
      prfs: pAdjEl.prfs,
      Prf: pAdjEl.moPrf,
    });
  };
  const leave = () => {
    ctx.setHdPoAaObj(null);
  };
  const click = (e) => {
    e.stopPropagation();
    ctx.setCdPoAaObj({
      prfs: pAdjEl.prfs,
      adj: pAdjEl.caAdj,
    });
  };
  return { hover, leave, click };
};

export default usePoAaRun;
