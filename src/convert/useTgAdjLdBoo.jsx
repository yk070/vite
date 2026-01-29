import useCtx from "../context/useCtx.jsx";
const useTgAdjLdBoo = ({ props }) => {
  const ctx = useCtx();

  const isHd = props.title === ctx.hdTgAdjLdObj?.title;
  const isSelected = props.objs.every((obj) =>
    ctx.acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  return { isHd, isSelected };
};

export default useTgAdjLdBoo;
