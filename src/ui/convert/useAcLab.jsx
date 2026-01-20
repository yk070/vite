import useAcRoo from "./useAcRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import AssignConvert from "./AssignConvert.jsx";
const useAcLab = ({ ButtonObj }) => {
  const roo = useAcRoo({ ButtonObj });
  const ctx = useCtx();

  const getLabel = () => {
    if (roo.isEnterBelow) return "";
    return AssignConvert(roo.modKey);
  };
  const label = getLabel();
  return { label };
};

export default useAcLab;
