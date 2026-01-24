import convLabel from "./convLabel.jsx";
import look from "../style/look.jsx";
import keyLabelObj from "../obj/keyLabelObj.js";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useCtx from "../context/useCtx.jsx";
const useTgLab = ({ preKey }) => {
  const boo = useTgBoo({ preKey });
  const roo = useTgRoo({ preKey });
  const ctx = useCtx();

  const originKeyLabel = keyLabelObj[roo.originKey];
  const originModKeyLabel = convLabel(roo.originModKey);
  const assignModKeyLabel = convLabel(roo.assignModKey);
  const multiHdAcModKeyLabel = convLabel(roo.multiHdAcModKey);
  const backLabel = (
    <>
      <span>{originModKeyLabel}</span>
    </>
  );

  const emptyLabel = (
    <>
      <span style={look.unusable1}>{""}</span>
    </>
  );
  const getLabel = () => {
    if (boo.isMultiPseudoHd) return multiHdAcModKeyLabel;
    if (boo.isHd) {
      if (ctx.isWoAcSd) {
        if (boo.isAssigned) return assignModKeyLabel;
        if (boo.isSoVirtualHold) {
          return "修飾キー";
        }
        if (boo.isEmptyLabel) return "";
        return originKeyLabel;
      }
      if (boo.isSoVirtualHold) {
        if (boo.isFunctionUsed) return "";
        return originKeyLabel;
      }
      if (boo.isUnusable) return backLabel;
      if (boo.isFunctionUsed && boo.isLocationUsed) return emptyLabel;
      if (boo.isFunctionUsed) return "";
    }
    if (boo.isSoVirtualHold) return "修飾キー";
    if (boo.isAssigned) return assignModKeyLabel;
    if (boo.isEmptyLabel) return "";
    return originKeyLabel;
  };

  const label = getLabel();
  return { label };
};

export default useTgLab;
