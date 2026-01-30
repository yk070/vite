import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useAcLdBoo from "../convert/useAcLdBoo.jsx";
const useAcLdCol = ({ props2 }) => {
  const ctx = useCtx();
  const boo = useAcLdBoo({ props2 });

  const getButtonColor = () => {
    if (boo.isHd) return tone.acSelectColor;
    return "transparent";
  };

  const borderColor = getButtonColor();
  return { borderColor };
};

export default useAcLdCol;
