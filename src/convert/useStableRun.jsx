import useCtx from "../context/useCtx.jsx";
const useStableRun = ({ props }) => {
  const ctx = useCtx();

  const click = () => {
    ctx.setCdStableObjs(props.objs);
  };
  const hover = () => {
    ctx.setHdStableObj(props);
  };
  const leave = () => {
    ctx.setHdStableObj(null);
  };
  return {
    click,
    hover,
    leave,
  };
};

export default useStableRun;
