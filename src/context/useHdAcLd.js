import { useEffect, useRef } from "react";

const useHdAcLd = (ctx) => {
  const prevFalseAdjTgRef = useRef("none");
  // console.log(ctx.isAcLdHd, prevFalseAdjTgRef.current);

  useEffect(() => {
    if (ctx.acLdAdj) ctx.setCurrentAdjTg(ctx.acLdAdj);
  }, [ctx.acLdAdj]);

  useEffect(() => {
    if (ctx.isAcLdHd) {
      prevFalseAdjTgRef.current = ctx.currentAdjTg;
    }
    ctx.setCurrentAdjTg(prevFalseAdjTgRef.current);
  }, [ctx.isAcLdHd]);
};

export default useHdAcLd;
