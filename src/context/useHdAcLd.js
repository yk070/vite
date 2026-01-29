import { useEffect, useRef } from "react";

const useHdAcLd = (ctx) => {
  const prevAdjTgRef = useRef("none");
  useEffect(() => {
    // if (ctx.hdAcLdObj?.adj === "space") return;
    if (ctx.isAcLd) {
      if (!ctx.isAcLdHd) prevAdjTgRef.current = ctx.currentAdjTg;
      ctx.setCurrentAdjTg(ctx.acLdAdj);
      return;
    }
    ctx.setCurrentAdjTg(prevAdjTgRef.current);
  }, [ctx.hdAcLdObj?.adj]);
};

export default useHdAcLd;
