import useAcRoo from "./useAcRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import ConvLabel from "./ConvLabel.jsx";
import useAcBoo from "./useAcBoo.jsx";
const useAcLab = ({ posiId }) => {
  const roo = useAcRoo({ posiId });
  const boo = useAcBoo({ posiId });
  const ctx = useCtx();

  const getLabel = () => {
    if (boo.isEnterBelow) return "";
    return <ConvLabel adjKey={roo.adjKey} />;
  };
  const label = getLabel();
  return { label };
};

export default useAcLab;
