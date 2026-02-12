import useCtx from "../context/useCtx.jsx";
import useCaMoBlRoo from "./useCaMoBlRoo.jsx";
const useCaMoBlRun = ({ pCo }) => {
  const ctx = useCtx();
  const roo = useCaMoBlRoo({ pCo });

  const hover = () => {
    ctx.setHdMoBlObj({ adj: pCo.caAdj, prfs: roo.moPrfs });
  };

  const leave = () => {
    ctx.setHdMoBlObj(null);
  };
  return { hover, leave };
};

export default useCaMoBlRun;
