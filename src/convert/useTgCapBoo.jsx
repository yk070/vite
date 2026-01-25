import useCtx from "../context/useCtx.jsx";
import { defaultAdjs } from "../array/namedNous.js";

const useTgBoo = ({ contextIndex }) => {
  const ctx = useCtx();

  const isSelected = contextIndex === ctx.currentAdjTg;
  const isAwayHovered =
    ctx.AwayHoveredAdj === contextIndex &&
    ctx.currentAdjTg !== ctx.AwayHoveredAdj;
  const isVirtual = !defaultAdjs.includes(contextIndex);
  return { isSelected, isAwayHovered, isVirtual };
};

export default useTgBoo;
