import useCtx from "../context/useCtx.jsx";
import useAdjEleRoo from "./useAdjEleRoo.jsx";
const useAdjEleRun = ({ pAdj }) => {
  const ctx = useCtx();
  const roo = useAdjEleRoo({ pAdj });

  const hover = () => {
    ctx.setHdAdjElObj({
      id: roo.id,
      prf: pAdj.moPrf,
    });
  };
  const leave = () => {
    ctx.setHdAdjElObj(null);
  };

  const click = () => {
    ctx.setCdAdjEleObj({ adj: pAdj.caAdj, prf: pAdj.moPrf });
  };

  return { hover, leave, click };
};

export default useAdjEleRun;
