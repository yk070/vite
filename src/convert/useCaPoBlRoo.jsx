import useCtx from "../context/useCtx.jsx";
const useCaPoBlRoo = ({ pEl }) => {
  const ctx = useCtx();

  const id = `${pEl.caAdj}${pEl.iHa}${pEl.iEl}`;
  return { id };
};

export default useCaPoBlRoo;
