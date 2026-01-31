import useCtx from "../context/useCtx.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
const useCapableBlockBoo = ({ props }) => {
  const ctx = useCtx();
  const roo = useCapableBlockRoo({ props });

  const isHd = ctx.hdCapableBlockId === roo.id;
  return { isHd };
};

export default useCapableBlockBoo;
