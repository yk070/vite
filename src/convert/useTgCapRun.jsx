import useCtx from "../context/useCtx.jsx";

const useTgCapRun = ({ tgCap }) => {
  const ctx = useCtx();

  const click = () => ctx.setCurrCapTg(tgCap);

  return { click };
};

export default useTgCapRun;
