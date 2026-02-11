import useCtx from "../context/useCtx.jsx";
import { virtualVersatiles } from "../array/namedArray.js";

const useCaPoBlBoo = ({ pAaa }) => {
  const ctx = useCtx();

  const isHd = ctx.hdPoBlAdj === pAaa.adj;
  const isNone = pAaa?.adj === "none";

  const isVirtual = virtualVersatiles.includes(pAaa?.adj);

  return {
    isNone,
    isVirtual,
    isHd,
  };
};

export default useCaPoBlBoo;
