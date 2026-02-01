import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useCapableBlockBoo from "../convert/useCapableBlockBoo.jsx";
const useCapableBlockCol = ({ pHalf }) => {
  const ctx = useCtx();
  const boo = useCapableBlockBoo({ pHalf });

  const getborderColor = () => {
    if (boo.isHd) return tone.capableBlockHdColor;
    return "transparent";
  };

  const borderColor = getborderColor();
  return { borderColor };
};

export default useCapableBlockCol;
