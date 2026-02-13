import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgBooMerge from "./useTgBooMerge.jsx";

const useTgButtonColor = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const merge = useTgBooMerge({ posiId });
  const cx = useCtx();
  //special
  if (boo.isAnSame) return tone.adj;
  if (boo.isDisabled) return tone.DisabledButtonColor;
  //capable
  if (boo.isPoPsHd) {
    if (boo.isTarget) return tone.acSd;
    return tone.acSd;
  }
  if (boo.isMoPsHd) {
    if (cx.isCapableOnHd) return tone.pseudoHd;
    return tone.acSd;
  }
  //isHd
  if (boo.isHd) {
    if (cx.isWoAcSd && (merge.isAssigned || merge.isSoVirtualHold))
      return tone.adj;
    return tone.normalButton;
  }
  //isWoAcSd
  if (cx.isWoAcSd) {
    if (merge.isAssigned || merge.isSoVirtualHold) return tone.pickUp;
    if (!merge.isAssigned) return tone.normalButton;
    if (merge.isAssigned) return tone.pickUp;
  }

  if (boo.isFunctionPsHd) return tone.RemoteHoveredColor;
  if (merge.isAssigned || merge.isSoVirtualHold) return tone.pickUp;
  if (cx.isWoAcSd) return tone.normalButton;

  return tone.normalButton;
};

export default useTgButtonColor;
