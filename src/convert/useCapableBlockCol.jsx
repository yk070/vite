import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useCapableBlockBoo from "../convert/useCapableBlockBoo.jsx";
const useCapableBlockCol = ({ pHalf }) => {
  const ctx = useCtx();
  const boo = useCapableBlockBoo({ pHalf });

  const getborderColor = () => {
    if (boo.isNone) return tone.none;
    if (boo.isVirtual) return tone.virtual;
    return tone.notNoneAdj;
  };

  const borderColor = getborderColor();
  return { borderColor };
};

export default useCapableBlockCol;
