import useCtx from "../context/useCtx.jsx";
const useMultiRunConvert = ({ title, objs }) => {
  const ctx = useCtx();

  const click = () => {
    ctx.setCdmultiObj({ title, objs });
  };
  const hover = () => {
    ctx.setHdmultiObj({ title, objs });
  };
  const leave = () => {
    ctx.setHdmultiObj(null);
  };
  return {
    click,
    hover,
    leave,
  };
};

export default useMultiRunConvert;
