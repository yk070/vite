import useCtx from "../context/useCtx.jsx";
import useAdjRoo from "./useAdjRoo.jsx";
const useAdjRun = ({ pContent }) => {
  const cx = useCtx();
  const roo = useAdjRoo({ pContent });

  const hover = () => {
    cx.setHdAdjObj({ adj: pContent.caAdj, prfs: roo.moPrfs });
  };

  const leave = () => {
    cx.setHdAdjObj(null);
  };
  return { hover, leave };
};

export default useAdjRun;
