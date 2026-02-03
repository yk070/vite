import tone from "../style/color.jsx";
import useAcBoo from "./useAcBoo.jsx";
import useCtx from "../context/useCtx.jsx";

const useAcCol = ({ posiId }) => {
  const boo = useAcBoo({ posiId });
  const ctx = useCtx();

  const getButtonColor = () => {
    if (boo.isDisabled) return tone.DisabledButtonColor;
    if (boo.isActive) return tone.acSelectColor;
    return tone.normalButton;
  };
  const getBorderColor = () => {
    if (boo.isDisabled && boo.isHd) return "transparent";
    if (!ctx.isWoAcSd && boo.isHd) return tone.acSelectColor;
    return "transparent";
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  return { buttonColor, borderColor };
};

export default useAcCol;
