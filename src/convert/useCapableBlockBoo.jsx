import useCtx from "../context/useCtx.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
const useCapableBlockBoo = ({ pHalf }) => {
  const ctx = useCtx();
  const roo = useCapableBlockRoo({ pHalf });

  const isHd = ctx.hdCapableBlockId === roo.id;
  return { isHd };
};

export default useCapableBlockBoo;
