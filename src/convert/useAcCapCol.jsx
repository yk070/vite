import tone from "../style/color.jsx";
import useAcCapBoo from "./useAcCapBoo.jsx";

const useAcCapCol = ({ acCap }) => {
  const boo = useAcCapBoo({ acCap });
  const getButtonColor = () => {
    if (boo.isActive) {
      return tone.TgCapSelectedColor;
    }
    return tone.TgCapColor;
  };
  const buttonColor = getButtonColor();

  return { buttonColor };
};

export default useAcCapCol;
