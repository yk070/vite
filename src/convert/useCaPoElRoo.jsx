import useCtx from "../context/useCtx.jsx";
const useCaPoElRoo = ({ pBl }) => {
  const ctx = useCtx();
  const id = `${pBl.adj}${pBl.i}`;
  return { id };
};

export default useCaPoElRoo;
