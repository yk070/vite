import useCtx from "../context/useCtx.jsx";
import { virtualVersatiles } from "../array/namedArray.js";

const useTgBoo = ({ tgCap }) => {
  const ctx = useCtx();

  const isSd = tgCap === ctx.currCapTg;
  const isRemoteHovered =
    ctx.remoteHdAdj === tgCap && ctx.currCapTg !== ctx.remoteHdAdj;
  const isVirtual = virtualVersatiles.includes(tgCap);
  return { isSd, isRemoteHovered, isVirtual };
};

export default useTgBoo;
