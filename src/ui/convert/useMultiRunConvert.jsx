import useCtx from "../context/useCtx.jsx";
const useMultiRunConvert = ({ title, objs }) => {
  const ctx = useCtx();

  const click = () => {
    ctx.setCdMultiObj({ title, objs });
  };
  const hover = () => {
    ctx.setHdMultiObj({ title, objs });
  };
  const leave = () => {
    ctx.setHdMultiObj(null);
  };
  return {
    click,
    hover,
    leave,
  };
};

export default useMultiRunConvert;
