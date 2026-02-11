import useCtx from "../context/useCtx.jsx";
import useCaMoBlRoo from "./useCaMoBlRoo.jsx";
import { virtualVersatiles } from "../array/namedArray.js";

const useCaMoBlBoo = ({ pAaa }) => {
  const ctx = useCtx();
  const roo = useCaMoBlRoo({ pAaa });
  const isHd = ctx.hdMoBlAdj === pAaa.caAdj;
  const isNone = pAaa.caAdj === "none";
  const isVirtual = virtualVersatiles.includes(pAaa.caAdj);

  return { isNone, isVirtual, isHd };
};

export default useCaMoBlBoo;
