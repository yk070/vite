import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";

const useTgButtonColor = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const ctx = useCtx();
  //special
  if (boo.isAdjNouSame) {
    if (boo.isVirtual) return tone.virtual;
    return tone.notNoneAdj;
  }
  if (boo.isDisabled) return tone.DisabledButtonColor;
  //stable
  if (boo.isStablePseudoHd) {
    if (ctx.isStableOnHd) return tone.multiOnColor;
    return tone.acSelectColor;
  }
  //capable
  if (boo.isCapablePseudoHd) {
    // if (ctx.isCapableOnHd) return tone.multiOnColor;
    // return tone.acSelectColor;
  }
  //isHd
  if (boo.isHd) {
    if (ctx.isWoAcSd && (boo.isAssigned || boo.isSoVirtualHold))
      return tone.virtual;
    return tone.normalButtonColor;
  }
  //isWoAcSd
  if (ctx.isWoAcSd) {
    if (boo.isAssigned || boo.isSoVirtualHold) return tone.virtual;
    if (!boo.isAssigned) return tone.normalButtonColor;
    if (boo.isAssigned) return tone.pickUp;
  }

  if (boo.isSoVirtualHold) return tone.virtual;
  if (boo.isRemoteHovered) return tone.RemoteHoveredColor;
  if (boo.isAssigned || boo.isSoVirtualHold) return tone.pickUp;
  if (ctx.isWoAcSd) return tone.normalButtonColor;

  return tone.normalButtonColor;
};

export default useTgButtonColor;
