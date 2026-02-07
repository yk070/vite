import useCtx from "../context/useCtx.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
import { virtualVersatiles } from "../array/namedArray.js";

const useCapableBlockBoo = ({ pHead }) => {
  const ctx = useCtx();
  const roo = useCapableBlockRoo({ pHead });
  const isHd = ctx.hdBlockAdj === pHead.adj;
  const isNone = pHead.adj === "none";
  const isVirtual = virtualVersatiles.includes(pHead.adj);

  return { isNone, isVirtual, isHd };
};

export default useCapableBlockBoo;
