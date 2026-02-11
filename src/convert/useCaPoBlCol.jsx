import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useCaPoBlBoo from "./useCaPoBlBoo.jsx";
const useCaPoBlCol = ({ pAaa }) => {
  const ctx = useCtx();
  const boo = useCaPoBlBoo({ pAaa });

  const getAdj = () => {
    if (boo.isNone) return tone.none;
    return tone.adj;
  };

  const getHdBlockColor = () => {
    if (boo.isHd) return tone.capable2;
    return tone.capable1;
  };

  const adj = getAdj();
  const hdBl = getHdBlockColor();

  return {
    adj,
    hdBl,
  };
};

export default useCaPoBlCol;
