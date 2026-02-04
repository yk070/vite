import useCtx from "../context/useCtx.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";
import { virtualVersatiles } from "../array/namedArray.js";

const useCapableBlockBoo = ({ pHalf }) => {
  const ctx = useCtx();
  const roo = useCapableBlockRoo({ pHalf });

  const isNone = pHalf.adj === "none";
  const isVirtual = virtualVersatiles.includes(pHalf.adj);

  return { isNone, isVirtual };
};

export default useCapableBlockBoo;
