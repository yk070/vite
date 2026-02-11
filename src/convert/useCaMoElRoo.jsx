import useCtx from "../context/useCtx.jsx";
const useCaMoElRoo = ({ pHa }) => {
  const ctx = useCtx();
  const id = `${pHa.isMo ? "mo" : "po"}${pHa.caAdj}${pHa.i}`;

  return { id };
};

export default useCaMoElRoo;
