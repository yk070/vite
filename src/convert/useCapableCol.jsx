import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useCapableBoo from "../convert/useCapableBoo.jsx";
const useCapableCol = ({ pBlock }) => {
  const ctx = useCtx();
  const boo = useCapableBoo({ pBlock });

  const getButtonColor = () => {
    if (boo.isSd && !boo.isHd) return tone.pickUp;
    if (boo.isSd) return tone.hoveredSelectedMultiColor;
    return tone.capableNormalColor;
  };
  const getBorderColor = () => {
    if (boo.isHd) return tone.black;
    return "white";
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  return { borderColor, buttonColor };
};

export default useCapableCol;
