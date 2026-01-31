import ConvLabel from "./ConvLabel.jsx";
import look from "../style/look.jsx";
import nouLabelObj from "../obj/nouLabelObj.js";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import { LuTriangleAlert } from "react-icons/lu";
const useTgLab = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const roo = useTgRoo({ posiId });
  const ctx = useCtx();

  const originKeyLabel = nouLabelObj[roo.originNou];
  const originAdjNouLabel = <ConvLabel adjNou={roo.originAdjNou} />;
  const assignAdjNouLabel = <ConvLabel adjNou={roo.assignAdjNou} />;
  const stableHdAcAdjNouLabel = <ConvLabel adjNou={roo.stableHdAcAdjNou} />;
  const capableHdAcAdjNouLabel = <ConvLabel adjNou={roo.capableHdAcAdjNou} />;

  const emptyLabel = (
    <>
      <span style={look.unusable1}>{""}</span>
    </>
  );
  const alertLabel = (
    <>
      <span style={look.alertLabel1}>{originAdjNouLabel}</span>
      <LuTriangleAlert style={look.acButton4} />
    </>
  );

  const getLabel = () => {
    if (boo.isStablePseudoHd) return stableHdAcAdjNouLabel;
    if (boo.isCapablePseudoHd) return capableHdAcAdjNouLabel;
    if (boo.isHd) {
      if (ctx.isWoAcSd) {
        if (boo.isAssigned) return assignAdjNouLabel;
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

      if (ctx.isWoTgVirtual) return originAdjNouLabel;
      if (boo.isUnusable) return alertLabel;
      if (boo.isFunctionUsed && boo.isLocationUsed) return emptyLabel;
      if (boo.isFunctionUsed) return "";
    }

    if (boo.isSoVirtualHold) return "修飾キー";
    if (boo.isAssigned) return assignAdjNouLabel;
    if (boo.isEmptyLabel || ctx.isWoTgVirtual) return "";

    return originKeyLabel;
  };

  const label = getLabel();
  return { label };
};

export default useTgLab;
