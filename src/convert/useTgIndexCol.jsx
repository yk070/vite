import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgIndexBoo from "./useTgIndexBoo.jsx";
const useTgCol = ({ contextIndex }) => {
  const ctx = useCtx();
  const boo = useTgIndexBoo({ contextIndex });

  const getButtonColor = () => {
    if (boo.isSelected && ctx.isWoTgNone) return "#444444";
    if (boo.isSelected) return tone.ModColor;
    return tone.tgIndexColor;
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

export default useTgCol;
