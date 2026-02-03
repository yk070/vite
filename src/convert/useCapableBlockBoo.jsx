import useCtx from "../context/useCtx.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
import { virtualVerstiles } from "../array/namedArray.js";

const useCapableBlockBoo = ({ pHalf }) => {
  const ctx = useCtx();
  const roo = useCapableBlockRoo({ pHalf });

  const isHd = ctx.hdCapableBlockId === roo.id;
  const isNone = pHalf.adj === "none";
  const isVirtual = virtualVerstiles.includes(pHalf.adj);

  return { isHd, isNone, isVirtual };
};

export default useCapableBlockBoo;
