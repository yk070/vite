import useCtx from "../context/useCtx.jsx";

const useTgIndexRun = ({ contextIndex }) => {
  const ctx = useCtx();

  const click = () => ctx.setCurrentModTg(contextIndex);

  return { click };
};

export default useTgIndexRun;
