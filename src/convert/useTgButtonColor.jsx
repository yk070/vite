import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgBooMerge from "./useTgBooMerge.jsx";

const useTgButtonColor = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const merge = useTgBooMerge({ posiId });
  const ctx = useCtx();
  //special
  if (boo.isAdjNouSame) return tone.adj;
  if (boo.isDisabled) return tone.DisabledButtonColor;
  //capable
  if (boo.isMoPsHd) {
    if (ctx.isCapableOnHd) return tone.pseudoHd;
    return tone.acSd;
  }
  if (boo.isPoPsHd) {
    if (ctx.isCapableOnHd) return tone.pseudoHd;
    return tone.acSd;
  }
  //isHd
  if (boo.isHd) {
    if (ctx.isWoAcSd && (merge.isAssigned || merge.isSoVirtualHold))
      return tone.adj;
    return tone.normalButton;
  }
  //isWoAcSd
  if (ctx.isWoAcSd) {
    if (merge.isAssigned || merge.isSoVirtualHold) return tone.pickUp;
    if (!merge.isAssigned) return tone.normalButton;
    if (merge.isAssigned) return tone.pickUp;
  }

  if (boo.isFunctionPsHd) return tone.RemoteHoveredColor;
  if (merge.isAssigned || merge.isSoVirtualHold) return tone.pickUp;
  if (ctx.isWoAcSd) return tone.normalButton;

  return tone.normalButton;
};

export default useTgButtonColor;
