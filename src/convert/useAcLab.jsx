import useAcRoo from "./useAcRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import ConvLabel from "./ConvLabel.jsx";
import useAcBoo from "./useAcBoo.jsx";
const useAcLab = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const boo = useAcBoo({ posiId });
  const cx = useCtx();

  const getLabel = () => {
    if (boo.isEnterBelow) return "";
    return <ConvLabel adjNou={roo.adjNou} />;
  };
  const label = getLabel();
  return { label };
};

export default useAcLab;
