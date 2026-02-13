import tone from "../style/color.jsx";
import useAdjEleBoo from "./useAdjEleBoo.jsx";
import useCtx from "../context/useCtx.jsx";

const useAdjEleCol = ({ pAdj }) => {
  const ctx = useCtx();
  const boo = useAdjEleBoo({ pAdj });

  const getBorderColor = () => {
    if (boo.isTarget2) return tone.moActive;
    if (ctx.hdPoAaId) return "";
    if (boo.isHd) return tone.moActive;
    if (pAdj.isHd) return tone.moActive;
    return "";
  };

  const getButtonColor = () => {
    if (boo.isSd && !boo.isHd) return tone.pickUp;
    if (boo.isSd) return tone.hoveredSelectedMultiColor;
    if (boo.isHd) return tone.acSd;
    return tone.normalButton;
  };

  const buttonColor = getButtonColor();
  const borderColor = getBorderColor();
  return { buttonColor, borderColor };
};

export default useAdjEleCol;
