import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useCapableBoo from "../convert/useCapableBoo.jsx";
const useCapableCol = ({ props2 }) => {
  const ctx = useCtx();
  const boo = useCapableBoo({ props2 });

  const getButtonColor = () => {
    if (boo.isEasy) return tone.capableEasyColor;
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
