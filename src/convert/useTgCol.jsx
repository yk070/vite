import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";

const useTgCol = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const ctx = useCtx();

  const getBorderColor = () => {
    // if (boo.isCapablePseudoHd) {
    //   if (ctx.isCapableOnHd) return "#6EC6FF";
    //   return tone.acSelectColor;
    // }
    if (ctx.isWoAcSd && !boo.isDisabled && boo.isHd) return tone.acSelectColor;

    if (boo.isHd) {
      if (boo.isAssigned && !boo.isVacant) return tone.acSelectColor;
      if (boo.isSoVirtualHold) return tone.acSelectColor;
    }

    return "transparent";
  };

  const getTextColor = () => {
    if (ctx.isStableOnHd) return "black";
    if (boo.isStablePseudoHd) return "black";
    if (boo.isCapablePseudoHd) return "black";
    if (boo.isAssigned) return "black";
    return tone.textWhite;
  };

  const getCircleColor = () => {
    if (boo.isCapablePseudoHd) return "black";
    return tone.textWhite;
  };

  const circleColor = getCircleColor();
  const borderColor = getBorderColor();
  const textColor = getTextColor();
  return {
    borderColor,
    textColor,
    circleColor,
  };
};

export default useTgCol;
