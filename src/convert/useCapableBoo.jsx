import useCtx from "../context/useCtx.jsx";
const useCapableBoo = ({ pBlock }) => {
  const ctx = useCtx();

  const isHd = ctx.hdCapableId === pBlock.id;
  const isSd = pBlock.adjObjs.every((obj) =>
    ctx.acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  console.log(isSd);
  return { isHd, isSd };
};

export default useCapableBoo;
