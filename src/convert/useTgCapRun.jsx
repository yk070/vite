import useCtx from "../context/useCtx.jsx";

const useTgCapRun = ({ tgCap }) => {
  const cx = useCtx();

  const click = () => cx.setCurrCapTg(tgCap);

  return { click };
};

export default useTgCapRun;
