import tone from "../style/color.jsx";
import useCaMoElBoo from "./useCaMoElBoo.jsx";
const useCaMoElCol = ({ pHa }) => {
  const boo = useCaMoElBoo({ pHa });

  const getBorderColor = () => {
    // if (boo.isHd) return tone.acSd;
    return "transparent";
  };

  const getButtonColor = () => {
    if (!pHa.isMo) return "transparent";
    if (boo.isSd && !boo.isHd) return tone.pickUp;
    if (boo.isSd) return tone.hoveredSelectedMultiColor;
    if (boo.isHd) return tone.acSd;
    return tone.normalButton;
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  return { borderColor, buttonColor };
};

export default useCaMoElCol;
