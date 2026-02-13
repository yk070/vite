import { useEffect } from "react";
import { virtualVersatiles } from "../array/namedArray.js";

const useHdAdjAdj = (ctx) => {
  useEffect(() => {
    //setCurrCapTg
    if (ctx.isCdMoRef.current) {
      ctx.isCdMoRef.current = false;
      return;
    }
    const hdAdj = ctx.hdAdjAdj;
    if (hdAdj) {
      ctx.setCurrCapTg(hdAdj);
    } else if (ctx.capPseudoRef) {
      ctx.setCurrCapTg(ctx.capPseudoRef);
    }

    //setUsedItms
    const isHdAdjVirtual = virtualVersatiles.includes(hdAdj);
    const isNotIncluded = !ctx.usedAdjs.includes(hdAdj);
    const isToRevise = isHdAdjVirtual && isNotIncluded;
    if (isToRevise) {
      ctx.setToReviseAdj(hdAdj);
    } else {
      ctx.setToReviseAdj(null);
    }
  }, [ctx.hdAdjAdj]);
};

export default useHdAdjAdj;
