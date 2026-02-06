import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgBooMerge from "./useTgBooMerge.jsx";

const useTgCol = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const merge = useTgBooMerge({ posiId });
  const ctx = useCtx();

  const getBorderColor = () => {
    if (boo.isDisabled) return "";
    if (boo.isBlockPsHd) return tone.capable2;
    if (boo.isHd) {
      if (ctx.isWoAcSd) return tone.acSd;
      if (merge.isVacant) return "";
      if (merge.isAssigned) return tone.acSd;
      if (merge.isSoVirtualHold) return tone.acSd;
    }
    return "transparent";
  };

  const getTextColor = () => {
    if (boo.isHd) return tone.textWhite;
    if (boo.isCapablePsHd) return "black";
    if (merge.isAssigned) return "black";
    return tone.textWhite;
  };

  const getCircleColor = () => {
    if (boo.isCapablePsHd) return "black";
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
