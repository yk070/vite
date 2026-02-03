import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgCapBoo from "./useTgCapBoo.jsx";
const useTgCapCol = ({ tgCap }) => {
  const ctx = useCtx();
  const boo = useTgCapBoo({ tgCap });

  const getButtonColor = () => {
    if (boo.isSd) {
      if (ctx.isWoTgNone) return tone.none;
      if (boo.isVirtual) return tone.virtual;
      return tone.notNoneAdj;
    }
    return tone.TgCapColor;
  };

  const gettextWhite = () => {
    if (boo.isSd) {
      if (boo.isVirtual) return tone.textWhite;
    }
    return tone.textBlackColor;
  };
  const buttonColor = getButtonColor();
  const textWhite = gettextWhite();
  return {
    buttonColor,
    textWhite,
  };
};

export default useTgCapCol;
