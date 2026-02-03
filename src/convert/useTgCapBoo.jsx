import useCtx from "../context/useCtx.jsx";
import { virtualVerstiles } from "../array/namedArray.js";

const useTgBoo = ({ tgCap }) => {
  const ctx = useCtx();

  const isSd = tgCap === ctx.currAdjTg;
  const isRemoteHovered =
    ctx.remoteHdAdj === tgCap && ctx.currAdjTg !== ctx.remoteHdAdj;
  const isVirtual = virtualVerstiles.includes(tgCap);
  return { isSd, isRemoteHovered, isVirtual };
};

export default useTgBoo;
