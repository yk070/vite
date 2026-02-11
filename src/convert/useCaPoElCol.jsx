import tone from "../style/color.jsx";
import useCaPoElBoo from "./useCaPoElBoo.jsx";
const useCaPoElCol = ({ pBl }) => {
  const boo = useCaPoElBoo({ pBl });

  const getBorderColor = () => {
    // if (boo.isHd) return tone.acSd;
    return "transparent";
  };

  const getButtonColor = () => {
    if (boo.isSd && !boo.isHd) return tone.pickUp;
    if (boo.isSd) return tone.hoveredSelectedMultiColor;
    if (boo.isHd) return tone.acSd;
    return tone.normalButton;
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  return { borderColor, buttonColor };
};

export default useCaPoElCol;
