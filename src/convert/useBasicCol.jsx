import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useBasicBoo from "./useBasicBoo.jsx";

const useBasicCol = ({ modKey }) => {
  const ctx = useCtx();
  const boo = useBasicBoo({ modKey });

  const getButtonColor = () => {
    if (boo.isActive) return tone.acSelectColor;
    return tone.normalButtonColor;
  };

  const getBorderColor = () => {
    if (!ctx.isWoAcSd && boo.isHd) return tone.acSelectColor;
    if (ctx.isWoAcSd) {
    }
    return "transparent"; // デフォルト
  };
  const getTextColor = () => {
    if (boo.isActive) return "black";
    return tone.TextColor;
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  const textColor = getTextColor();
  return { buttonColor, borderColor, textColor };
};

export default useBasicCol;
