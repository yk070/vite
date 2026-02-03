import useCtx from "../context/useCtx.jsx";

const useTgCapRun = ({ tgCap }) => {
  const ctx = useCtx();

  const click = () => ctx.setCurrAdjTg(tgCap);

  return { click };
};

export default useTgCapRun;
