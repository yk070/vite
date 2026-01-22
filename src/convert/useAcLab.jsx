import useAcRoo from "./useAcRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import AssignConvert from "./AssignConvert.jsx";
import useAcBoo from "./useAcBoo.jsx";
const useAcLab = ({ ButtonObj }) => {
  const roo = useAcRoo({ ButtonObj });
  const boo = useAcBoo({ ButtonObj });
  const ctx = useCtx();

  const getLabel = () => {
    if (boo.isEnterBelow) return "";
    return AssignConvert(roo.modKey);
  };
  const label = getLabel();
  return { label };
};

export default useAcLab;
