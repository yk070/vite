import useCtx from "../context/useCtx.jsx";
import { defaultAdjs } from "../array/namedArray.js";

const useTgBoo = ({ tgCap }) => {
  const ctx = useCtx();

  const isSelected = tgCap === ctx.currentAdjTg;
  const isRemoteHovered =
    ctx.remoteHdAdj === tgCap && ctx.currentAdjTg !== ctx.remoteHdAdj;
  const isVirtual = !defaultAdjs.includes(tgCap);
  return { isSelected, isRemoteHovered, isVirtual };
};

export default useTgBoo;
