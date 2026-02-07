import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useCapableBlockBoo from "../convert/useCapableBlockBoo.jsx";
const useCapableBlockCol = ({ pHead }) => {
  const ctx = useCtx();
  const boo = useCapableBlockBoo({ pHead });

  const getAdj = () => {
    if (boo.isNone) return tone.none;
    return tone.adj;
  };

  const getHdBlockColor = () => {
    if (boo.isHd) return tone.capable2;
    return tone.capable1;
  };

  const adj = getAdj();
  const hdBlock = getHdBlockColor();

  return { adj, hdBlock };
};

export default useCapableBlockCol;
