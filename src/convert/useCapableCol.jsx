import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useCapableBoo from "../convert/useCapableBoo.jsx";
const useCapableCol = ({ pBlock }) => {
  const ctx = useCtx();
  const boo = useCapableBoo({ pBlock });

  const getButtonColor = () => {
    if (boo.isSd) return "red";
    return tone.capableNormalColor;
  };
  const getBorderColor = () => {
    if (boo.isHd) return tone.acSelectColor;
    return "transparent";
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  return { borderColor, buttonColor };
};

export default useCapableCol;
