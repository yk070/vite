import useCtx from "../context/useCtx.jsx";
const useCapableRoo = ({ pBlock }) => {
  const ctx = useCtx();
  const id = `${pBlock.adj}${pBlock.i}`;
  return { id };
};

export default useCapableRoo;
