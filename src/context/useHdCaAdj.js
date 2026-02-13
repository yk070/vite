import { useEffect } from "react";
import { virtualVersatiles } from "../array/namedArray.js";

const useHdCaAdj = (cx) => {
  useEffect(() => {
    //setCurrCapTg
    if (cx.isAdjFixRef.current) {
      cx.isAdjFixRef.current = false;
      return;
    }
    const hdAdj = cx.hdCaAdj;
    if (hdAdj) {
      cx.setCurrCapTg(hdAdj);
    } else if (cx.capPseudoRef) {
      cx.setCurrCapTg(cx.capPseudoRef);
    }

    //setUsedItms
    const isHdAdjVirtual = virtualVersatiles.includes(hdAdj);
    const isNotIncluded = !cx.usedAdjs.includes(hdAdj);
    const isToRevise = isHdAdjVirtual && isNotIncluded;
    if (isToRevise) {
      cx.setToReviseAdj(hdAdj);
    } else {
      cx.setToReviseAdj(null);
    }
  }, [cx.hdCaAdj]);
};

export default useHdCaAdj;
