import useCtx from "../context/useCtx.jsx";
const useTgAdjLdRun = ({ props }) => {
  const ctx = useCtx();

  const click = () => {
    ctx.setCdTgAdjLdObj(props);
  };
  const hover = () => {
    ctx.setHdTgAdjLdObj(props);
  };
  const leave = () => {
    ctx.setHdTgAdjLdObj(null);
  };
  return {
    click,
    hover,
    leave,
  };
};

export default useTgAdjLdRun;
