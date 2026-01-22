import useCtx from "../context/useCtx.jsx";

const useTgIndexRun = ({ contextIndex }) => {
  const ctx = useCtx();

  const click = () => ctx.setcurrentModTg(contextIndex);

  return { click };
};

export default useTgIndexRun;
