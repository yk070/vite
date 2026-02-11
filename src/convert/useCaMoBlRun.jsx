import useCtx from "../context/useCtx.jsx";
import useCaMoBlRoo from "./useCaMoBlRoo.jsx";
const useCaMoBlRun = ({ pAaa }) => {
  const ctx = useCtx();
  const roo = useCaMoBlRoo({ pAaa });

  const hover = () => {
    ctx.setHdMoBlObj({ adj: pAaa.caAdj, prfs: pAaa.moPrfs });
  };

  const leave = () => {
    ctx.setHdMoBlObj(null);
  };
  return { hover, leave };
};

export default useCaMoBlRun;
