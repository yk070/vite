import tone from "../style/color.jsx";
import useCaMoElBoo from "./useCaMoElBoo.jsx";
const useCaMoElCol = ({ pHa }) => {
  const boo = useCaMoElBoo({ pHa });

  // const getBorderColor = () => {
  //   return "";
  // };

  const getButtonColor = () => {
    if (boo.isSd && !boo.isHd) return tone.pickUp;
    if (boo.isSd) return tone.hoveredSelectedMultiColor;
    if (boo.isHd) return tone.acSd;
    return tone.normalButton;
  };

  const buttonColor = getButtonColor();
  // const borderColor = getBorderColor();
  return { buttonColor };
};

export default useCaMoElCol;
