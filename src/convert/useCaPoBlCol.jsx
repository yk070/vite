import useCtx from "../context/useCtx.jsx";
import useCaPoBlBoo from "./useCaPoBlBoo.jsx";

const useCaPoBlCol = ({ pEl }) => {
  const ctx = useCtx();
  const boo = useCaPoBlBoo({ pEl });

  const getButtonColor = () => {
    if (boo.isHd) return "red";
    return "";
  };
  const borderColor = getButtonColor();

  return { borderColor };
};

export default useCaPoBlCol;
