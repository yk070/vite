import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useAcLdBoo from "../convert/useAcLdBoo.jsx";
const useAcLdCol = ({ props }) => {
  const ctx = useCtx();
  const boo = useAcLdBoo({ props });

  const getButtonColor = () => {
    if (boo.isHd) return tone.acSelectColor;
    return "transparent";
  };

  const borderColor = getButtonColor();
  return { borderColor };
};

export default useAcLdCol;
