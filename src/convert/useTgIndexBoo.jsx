import useCtx from "../context/useCtx.jsx";
import { ModIndexes } from "../array/namedMods.jsx";

const useTgBoo = ({ contextIndex }) => {
  const ctx = useCtx();

  const isSelected = contextIndex === ctx.currentModTg;
  const isAwayHovered =
    ctx.AwayHoveredMod === contextIndex &&
    ctx.currentModTg !== ctx.AwayHoveredMod;
  const isVirtual = !ModIndexes.includes(contextIndex);
  return { isSelected, isAwayHovered, isVirtual };
};

export default useTgBoo;
