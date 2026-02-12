import useCtx from "../context/useCtx.jsx";
const useCaMoElRoo = ({ pHa }) => {
  const ctx = useCtx();

  const id = `${pHa.caAdj}${pHa.iHa}`;

  const po3Prfss = pHa.po3Prfsss[pHa.iHa];

  return { id, po3Prfss };
};

export default useCaMoElRoo;
