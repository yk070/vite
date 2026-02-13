import ConvLabel from "./ConvLabel.jsx";
import look from "../style/look.jsx";
import nouLabelObj from "../obj/nouLabelObj.js";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useCtx from "../context/useCtx.jsx";
import { LuTriangleAlert } from "react-icons/lu";
import useTgBooMerge from "./useTgBooMerge.jsx";

const useTgLab = ({ posiId }) => {
  const cx = useCtx();
  const boo = useTgBoo({ posiId });
  const roo = useTgRoo({ posiId });
  const merge = useTgBooMerge({ posiId });

  const moHdAn = boo.isMoPsHd ? cx.hdMoPrf.ac : undefined;

  const rawKeyLabel = nouLabelObj[roo.rawNou];
  const rawAnLabel = <ConvLabel adjNou={roo.rawAn} />;
  const fakeAnLabel = <ConvLabel adjNou={roo.fakeAn} />;
  const moHdAnLabel = <ConvLabel adjNou={moHdAn} />;
  const poHdAnLabel = <ConvLabel adjNou={roo.poHdAn} />;

  const emptyLabel = (
    <>
      <span style={look.unusable1}>{""}</span>
    </>
  );
  const alertLabel = (
    <>
      <span style={look.alertLabel1}>{rawAnLabel}</span>
      <LuTriangleAlert style={look.acButton4} />
    </>
  );

  const getLabel = () => {
    if (boo.isMoPsHd) return moHdAnLabel;
    if (boo.isPoPsHd) return poHdAnLabel;
    if (boo.isHd) {
      if (cx.isWoAcSd) {
        if (merge.isAssigned) return fakeAnLabel;
        if (merge.isSoVirtualHold) {
          return "修飾キー";
        }
        if (merge.isEmptyLabel) return "";
        return rawKeyLabel;
      }

      if (merge.isSoVirtualHold) {
        if (boo.isFunctionUsed) return "";
        return alertLabel;
      }

      if (cx.isWoTgVirtual) return rawAnLabel;
      if (merge.isUnusable) return alertLabel;
      if (boo.isFunctionUsed && boo.isLocationUsed) return emptyLabel;
      if (boo.isFunctionUsed) return "";
    }

    if (merge.isSoVirtualHold) return "修飾キー";
    if (merge.isAssigned) return fakeAnLabel;
    if (merge.isEmptyLabel || cx.isWoTgVirtual) return "";

    return rawKeyLabel;
  };

  const label = getLabel();
  return { label };
};

export default useTgLab;
