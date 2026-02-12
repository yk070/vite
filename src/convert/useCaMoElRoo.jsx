import useCtx from "../context/useCtx.jsx";
const useCaMoElRoo = ({ pHa }) => {
  const ctx = useCtx();
  const id = `${pHa.caAdj}${pHa.iHa}`;

  return { id };
};

export default useCaMoElRoo;
