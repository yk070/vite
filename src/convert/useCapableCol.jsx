import tone from "../style/color.jsx";
import useCapableBoo from "../convert/useCapableBoo.jsx";
const useCapableCol = ({ pBlock }) => {
  const boo = useCapableBoo({ pBlock });

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

export default useCapableCol;
