import useCtx from "../context/useCtx.jsx";
import useAdjEleRoo from "./useAdjEleRoo.jsx";
const useAdjEleRun = ({ pAdj }) => {
  const cx = useCtx();
  const roo = useAdjEleRoo({ pAdj });

  const hover = () => {
    cx.setHdAdjElObj({
      id: roo.id,
      prf: pAdj.moPrf,
    });
  };
  const leave = () => {
    cx.setHdAdjElObj(null);
  };

  const click = () => {
    cx.setCdAdjElObj({ adj: pAdj.caAdj, prf: pAdj.moPrf });
  };

  return { hover, leave, click };
};

export default useAdjEleRun;
