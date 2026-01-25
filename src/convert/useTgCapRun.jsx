import useCtx from "../context/useCtx.jsx";

const useTgCapRun = ({ tgCap }) => {
  const ctx = useCtx();

  const click = () => ctx.setCurrentAdjTg(tgCap);

  return { click };
};

export default useTgCapRun;
