import useCtx from "../context/useCtx.jsx";
import useAdjRoo from "./useAdjRoo.jsx";
const useAdjRun = ({ pContent }) => {
  const ctx = useCtx();
  const roo = useAdjRoo({ pContent });

  const hover = () => {
    ctx.setHdAdjObj({ adj: pContent.caAdj, prfs: roo.moPrfs });
  };

  const leave = () => {
    ctx.setHdAdjObj(null);
  };
  return { hover, leave };
};

export default useAdjRun;
