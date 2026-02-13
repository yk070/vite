import useCtx from "../context/useCtx.jsx";
const useBasicRun = ({ adjNou }) => {
  const cx = useCtx();

  const click = () => {
    if (cx.isWoAcSd) {
      cx.setCdAcAn({});
    } else {
      cx.setCdAcAn({
        adjNou: adjNou,
      });
    }
  };

  const hover = () => {
    cx.setHdAnAc(adjNou);
  };
  const leave = () => {
    cx.setHdAnAc(null);
  };

  return { click, hover, leave };
};

export default useBasicRun;
