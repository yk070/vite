import useCtx from "../context/useCtx.jsx";

const useTgCapRun = ({ contextIndex }) => {
  const ctx = useCtx();

  const click = () => ctx.setCurrentAdjTg(contextIndex);

  return { click };
};

export default useTgCapRun;
