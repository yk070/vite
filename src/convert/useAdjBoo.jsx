import useCtx from "../context/useCtx.jsx";
import useAdjRoo from "./useAdjRoo.jsx";
import { virtualVersatiles } from "../array/namedArray.js";

const useAdjBoo = ({ pContent }) => {
  const cx = useCtx();
  const roo = useAdjRoo({ pContent });
  const isHd = cx.hdCaAdj === pContent.caAdj;
  const isNone = pContent.caAdj === "none";
  const isVirtual = virtualVersatiles.includes(pContent.caAdj);

  return { isNone, isVirtual, isHd };
};

export default useAdjBoo;
