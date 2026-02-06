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

  const getFooColor = () => {
    if (boo.isHd) return tone.capable2;
    return tone.capable1;
  };

  const borderColor = getborderColor();
  const fooColor = getFooColor();

  return { borderColor, fooColor };
};

export default useCapableBlockCol;
