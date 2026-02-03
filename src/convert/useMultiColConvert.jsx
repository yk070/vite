import tone from "../style/color.jsx";
const useStableCol = ({ boo }) => {
  const getButtonColor = () => {
    if (boo.isSd && !boo.isHd) return tone.pickUp;
    if (boo.isSd) return tone.hoveredSelectedMultiColor;
    // if (boo.isHd) return tone.multiColor;
    return tone.normalButtonColor;
  };

  const getborderColor = () => {
    // if (boo.isSd && !boo.isHd) return tone.pickUp;
    // if (boo.isSd) return tone.hoveredSelectedMultiColor;
    if (boo.isHd) return tone.acSelectColor;
    return "transparent";
  };

  const buttonColor = getButtonColor();
  const borderColor = getborderColor();
  return { buttonColor, borderColor };
};

export default useStableCol;
