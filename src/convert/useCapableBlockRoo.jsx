import useCtx from "../context/useCtx.jsx";
const useCapableBlockRoo = ({ pHalf }) => {
  const ctx = useCtx();

  const id = `${pHalf.title}${pHalf.adj}`;
  const hdObj = { adj: pHalf.adj, preferencess: pHalf.preferencess, id };
  return { id, hdObj };
};

export default useCapableBlockRoo;
