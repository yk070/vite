import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useBasicBoo from "./useBasicBoo.jsx";

const useBasicCol = ({ adjNou }) => {
  const cx = useCtx();
  const boo = useBasicBoo({ adjNou });

  const getButtonColor = () => {
    if (boo.isActive) return tone.acSd;
    return tone.normalButton;
  };

  const getBorderColor = () => {
    if (!cx.isWoAcSd && boo.isHd) return tone.acSd;
    if (cx.isWoAcSd) {
    }
    return "transparent"; // デフォルト
  };
  const getTextColor = () => {
    if (boo.isActive) return "black";
    return tone.textWhite;
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  const textWhite = getTextColor();
  return { buttonColor, borderColor, textWhite };
};

export default useBasicCol;
