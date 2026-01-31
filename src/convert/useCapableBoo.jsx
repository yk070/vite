import useCtx from "../context/useCtx.jsx";
const useCapableBoo = ({ props2 }) => {
  const ctx = useCtx();

  const isHd = ctx.hdCapableId === props2.id;
  const isEasy = props2.adjObj.ease === 1;
  return { isHd, isEasy };
};

export default useCapableBoo;
