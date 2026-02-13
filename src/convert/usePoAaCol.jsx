import useCtx from "../context/useCtx.jsx";
import usePoAaBoo from "./usePoAaBoo.jsx";
import tone from "../style/color.jsx";

const usePoAaCol = ({ pAdjEl }) => {
  const ctx = useCtx();
  const boo = usePoAaBoo({ pAdjEl });

  // const getBorderColor = () => {
  //   if (boo.isHd) return "";
  //   return "";
  // };

  const getButtonColor = () => {
    if (boo.isHd) return tone.acSd;
    return tone.normalButton;
  };

  // const borderColor = getBorderColor();
  const buttonColor = getButtonColor();

  return { buttonColor };
};

export default usePoAaCol;
