import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgCapBoo from "./useTgCapBoo.jsx";
const useTgCapCol = ({ contextIndex }) => {
  const ctx = useCtx();
  const boo = useTgCapBoo({ contextIndex });

  const getButtonColor = () => {
    if (boo.isSelected && ctx.isWoTgNone) return "#444444";
    if (boo.isSelected) return tone.ModColor;
    return tone.TgCapColor;
  };

  const getTextColor = () => {
    if (boo.isVirtual) return tone.violetTextColor;
    return tone.textBlackColor;
  };
  const buttonColor = getButtonColor();
  const textColor = getTextColor();
  return {
    buttonColor,
    textColor,
  };
};

export default useTgCapCol;
