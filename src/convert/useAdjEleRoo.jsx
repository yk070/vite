import useCtx from "../context/useCtx.jsx";
const useAdjEleRoo = ({ pAdj }) => {
  const cx = useCtx();

  const id = `${pAdj.caAdj}${pAdj.iAdj}`;

  const po3Prfss = pAdj.po3Prfsss[pAdj.iAdj];

  return { id, po3Prfss };
};

export default useAdjEleRoo;
