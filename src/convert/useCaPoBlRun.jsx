import useCtx from "../context/useCtx.jsx";
import useCaPoBlRoo from "./useCaPoBlRoo.jsx";

const useCaPoBlRun = ({ pEl }) => {
  const ctx = useCtx();
  const roo = useCaPoBlRoo({ pEl });

  const hover = () => {
    ctx.setHdPoBlObj({
      id: roo.id,
      prfs: pEl.prfs,
    });
  };
  const leave = () => {
    ctx.setHdPoBlObj(null);
  };
  return { hover, leave };
};

export default useCaPoBlRun;
