import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgCapBoo from "./useTgCapBoo.jsx";
const useTgCapCol = ({ tgCap }) => {
  const cx = useCtx();
  const boo = useTgCapBoo({ tgCap });

  const getButtonColor = () => {
    if (boo.isSd) {
      if (cx.isWoTgNone) return tone.none;
      if (cx.isWoTgVirtual) return tone.adj;
      return tone.adj;
      // return tone.adj;
    }
    return tone.TgCapColor;
  };

  const getTextColor = () => {
    if (boo.isSd) return tone.textWhite;
    return tone.textBlackColor;
  };
  const buttonColor = getButtonColor();
  const textWhite = getTextColor();
  return {
    buttonColor,
    textWhite,
  };
};

export default useTgCapCol;
