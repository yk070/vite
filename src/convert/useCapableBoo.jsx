import useCtx from "../context/useCtx.jsx";
import useCapableRoo from "../convert/useCapableRoo.jsx";

const useCapableBoo = ({ pBlock }) => {
  const ctx = useCtx();
  const roo = useCapableRoo({ pBlock });

  const isHd = ctx.hdCapableId === roo.id;
  // const isSd = pBlock.prfs.every((obj) =>
  //   ctx.acTgsSet.has(`${obj.ac}|${obj.tg}`),
  // );
  return {
    isHd,
    // isSd
  };
};

export default useCapableBoo;
