import AssignConvert from "./AssignConvert.jsx";
import look from "../style/look.jsx";
import keyLabelObj from "../obj/keyLabelObj.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import TgButton from "../area/TgButton.jsx";
const useTgLab = ({ buttonObj }) => {
  const boo = useTgBoo({ buttonObj });
  const roo = useTgRoo({ buttonObj });
  const ctx = useCtx();

  const originKeyLabel = keyLabelObj[roo.originKey];
  const originModKeyLabel = AssignConvert(roo.originModKey);
  const assignModKeyLabel = AssignConvert(roo.assignModKey);
  const multiHdAcModKeyLabel = AssignConvert(roo.multiHdAcModKey);
  const backLabel = (
    <>
      <span>{originModKeyLabel}</span>
      {/* <span style={look.unusable1}>{"に戻す"}</span> */}
    </>
  );

  const emptyLabel = (
    <>
      <span style={look.unusable1}>{""}</span>
    </>
  );
  const getLabel = () => {
    if (boo.isMultiPseudoHd) return multiHdAcModKeyLabel;
    if (ctx.isWoAcSd && boo.isHd) {
      if (boo.isAssigned) return assignModKeyLabel;
      if (boo.isEmptyLabel) return "";
      return originKeyLabel;
    }
    if (boo.isHd) {
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
