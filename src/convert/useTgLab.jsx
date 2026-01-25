import ConvLabel from "./ConvLabel.jsx";
import look from "../style/look.jsx";
import keyLabelObj from "../obj/keyLabelObj.js";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import { LuTriangleAlert } from "react-icons/lu";
const useTgLab = ({ preKey }) => {
  const boo = useTgBoo({ preKey });
  const roo = useTgRoo({ preKey });
  const ctx = useCtx();

  const originKeyLabel = keyLabelObj[roo.originKey];
  const originModKeyLabel = <ConvLabel modKey={roo.originModKey} />;
  const assignModKeyLabel = <ConvLabel modKey={roo.assignModKey} />;
  const multiHdAcModKeyLabel = <ConvLabel modKey={roo.multiHdAcModKey} />;
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
  const alertLabel = (
    <>
      <span style={look.alertLabel1}>{originKeyLabel}</span>
      <LuTriangleAlert style={look.acButton4} />
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
        return alertLabel;
      }
      if (boo.isUnusable) return alertLabel;
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
