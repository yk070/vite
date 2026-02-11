import useCtx from "../context/useCtx.jsx";
import useCaMoBlRoo from "./useCaMoBlRoo.jsx";
const useCaPoBlRun = ({ pAaa }) => {
  const ctx = useCtx();
  const roo = useCaMoBlRoo({ pAaa });

  const hover = () => {
    ctx.setHdPoBlObj({ adj: pAaa.adj });
  };

  const leave = () => {
    ctx.setHdPoBlObj(null);
  };
  return { hover, leave };
};

export default useCaPoBlRun;
