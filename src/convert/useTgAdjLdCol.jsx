import tone from "../style/color.jsx";
const useTgAdjLdCol = ({ boo }) => {
  const getButtonColor = () => {
    if (boo.isSelected && !boo.isHd) return tone.AccentColor;
    if (boo.isSelected) return tone.hoveredSelectedMultiColor;
    // if (boo.isHd) return tone.multiColor;
    return tone.normalButtonColor;
  };

  const getborderColor = () => {
    // if (boo.isSelected && !boo.isHd) return tone.AccentColor;
    // if (boo.isSelected) return tone.hoveredSelectedMultiColor;
    if (boo.isHd) return tone.acSelectColor;
    return "transparent";
  };

  const buttonColor = getButtonColor();
  const borderColor = getborderColor();
  return { buttonColor, borderColor };
};

export default useTgAdjLdCol;
