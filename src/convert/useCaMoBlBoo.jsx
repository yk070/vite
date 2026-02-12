import useCtx from "../context/useCtx.jsx";
import useCaMoBlRoo from "./useCaMoBlRoo.jsx";
import { virtualVersatiles } from "../array/namedArray.js";

const useCaMoBlBoo = ({ pCo }) => {
  const ctx = useCtx();
  const roo = useCaMoBlRoo({ pCo });
  const isHd = ctx.hdMoBlAdj === pCo.caAdj;
  const isNone = pCo.caAdj === "none";
  const isVirtual = virtualVersatiles.includes(pCo.caAdj);

  return { isNone, isVirtual, isHd };
};

export default useCaMoBlBoo;
