import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";
import TgButton from "../area/TgButton.jsx";
const useTgCol = ({ buttonObj }) => {
  const boo = useTgBoo({ buttonObj });
  const ctx = useCtx();

  const getButtonColor = () => {
    if (boo.isModKeySame) return tone.ModColor;
    if (boo.isMultiPseudoHd) {
      if (ctx.isMultiOnHd) return tone.multiOnColor;
      return tone.acSelectColor;
    }
    if (ctx.isWoAcSd) {
      if (!boo.isAssigned && !boo.isDisabled) return tone.normalButtonColor;
      if (boo.isAssigned) return tone.AccentColor;
    }
    if (boo.isAwayHovered) return tone.AwayHoveredColor;
    if (boo.isHd && (boo.isLocationUsed || boo.isVacant))
      return tone.AwayHoveredColor;
    if (boo.isAssigned) return tone.AccentColor;
    if (boo.isDisabled) return tone.DisabledButtonColor;
    if (ctx.isWoAcSd) return tone.normalButtonColor;
    return tone.normalButtonColor;
  };

  const getBorderColor = () => {
    if (ctx.isWoAcSd && !boo.isDisabled && boo.isHd) return tone.acSelectColor;

    if (boo.isHd && boo.isAssigned && !boo.isVacant) return tone.acSelectColor;

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
