import useAcRoo from "./useAcRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import ConvLabel from "./ConvLabel.jsx";
import useAcBoo from "./useAcBoo.jsx";
const useAcLab = ({ preKey }) => {
  const roo = useAcRoo({ preKey });
  const boo = useAcBoo({ preKey });
  const ctx = useCtx();

  const getLabel = () => {
    if (boo.isEnterBelow) return "";
    return <ConvLabel modKey={roo.modKey} />;
  };
  const label = getLabel();
  return { label };
};

export default useAcLab;
