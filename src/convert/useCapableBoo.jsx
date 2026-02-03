import useCtx from "../context/useCtx.jsx";

const useCapableBoo = ({ pBlock }) => {
  const ctx = useCtx();

  const isHd = ctx.hdCapableId === pBlock.id;
  const isSd = pBlock.preferences.every((obj) =>
    ctx.acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  return { isHd, isSd };
};

export default useCapableBoo;
