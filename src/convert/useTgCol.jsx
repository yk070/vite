import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";

const useTgCol = ({ preKey }) => {
  const boo = useTgBoo({ preKey });
  const ctx = useCtx();

  const getButtonColor = () => {
    if (boo.isModKeySame) return tone.ModColor;
    if (boo.isDisabled) return tone.DisabledButtonColor;
    if (boo.isMultiPseudoHd) {
      if (ctx.isMultiOnHd) return tone.multiOnColor;
      return tone.acSelectColor;
    }
    if (boo.isHd) {
      if (ctx.isWoAcSd && (boo.isAssigned || boo.isSoVirtualHold))
        return tone.violetTextColor;
      return tone.normalButtonColor;
    }
    if (ctx.isWoAcSd) {
      if (boo.isAssigned || boo.isSoVirtualHold) return tone.violetTextColor;
      if (!boo.isAssigned) return tone.normalButtonColor;
      if (boo.isAssigned) return tone.AccentColor;
    }
    if (boo.isSoVirtualHold) return tone.violetTextColor;
    if (boo.isAwayHovered) return tone.AwayHoveredColor;
    if (boo.isAssigned || boo.isSoVirtualHold) return tone.AccentColor;
    if (ctx.isWoAcSd) return tone.normalButtonColor;
    return tone.normalButtonColor;
  };

  const getBorderColor = () => {
    if (ctx.isWoAcSd && !boo.isDisabled && boo.isHd) return tone.acSelectColor;

    if (boo.isHd) {
      if (boo.isAssigned && !boo.isVacant) return tone.acSelectColor;
      if (boo.isSoVirtualHold) return tone.acSelectColor;
    }

    return "transparent";
  };

  const getTextColor = () => {
    if (ctx.isMultiOnHd) return tone.TextColor;
    if (boo.isMultiPseudoHd) return "black";
    return tone.TextColor;
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  const textColor = getTextColor();
  return {
    buttonColor,
    borderColor,
    textColor,
  };
};

export default useTgCol;
