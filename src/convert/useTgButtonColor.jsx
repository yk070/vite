import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgBooMerge from "./useTgBooMerge.jsx";

const useTgButtonColor = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const merge = useTgBooMerge({ posiId });
  const ctx = useCtx();
  //special
  if (boo.isAdjNouSame) {
    if (boo.isVirtual) return tone.virtual;
    return tone.notNoneAdj;
  }
  if (boo.isDisabled) return tone.DisabledButtonColor;
  //capable
  if (boo.isCapablePsHd) {
    if (ctx.isCapableOnHd) return tone.pseudoHd;
    return tone.acSd;
  }
  //isHd
  if (boo.isHd) {
    if (ctx.isWoAcSd && (merge.isAssigned || merge.isSoVirtualHold))
      return tone.virtual;
    return tone.normalButton;
  }
  //isWoAcSd
  if (ctx.isWoAcSd) {
    if (merge.isAssigned || merge.isSoVirtualHold) return tone.virtual;
    if (!merge.isAssigned) return tone.normalButton;
    if (merge.isAssigned) return tone.pickUp;
  }

  if (boo.isFunctionPsHd) return tone.RemoteHoveredColor;
  if (merge.isAssigned || merge.isSoVirtualHold) return tone.pickUp;
  if (ctx.isWoAcSd) return tone.normalButton;

  return tone.normalButton;
};

export default useTgButtonColor;
