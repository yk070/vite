import useCtx from "../context/useCtx.jsx";
const useStableBoo = ({ props }) => {
  const ctx = useCtx();

  const isHd = props.title === ctx.hdStableObj?.title;
  const isSd = props.objs.every((obj) =>
    ctx.acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  return { isHd, isSd };
};

export default useStableBoo;
