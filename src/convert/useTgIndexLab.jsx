import useCtx from "../context/useCtx.jsx";
import { acIndexLabelObj } from "../obj/namedObj.jsx";
import useTgIndexBoo from "./useTgIndexBoo.jsx";
import look from "../style/look.jsx";

const useTgIndexLab = ({ contextIndex }) => {
  const ctx = useCtx();
  const boo = useTgIndexBoo({ contextIndex });
  const planeLabel = (
    <>
      <span>{acIndexLabelObj[contextIndex]}</span>
    </>
  );
  const AwayHoveredLabel = (
    <>
      {planeLabel}
      <span>{ctx.AwayHoveredKeyLabel}</span>
      {"="}
      <span style={look.tgIndex4}>{ctx.HoveredModKeyTgLabel}</span>
    </>
  );
  {
    <></>;
  }
  const getLabel = () => {
    if (boo.isAwayHovered) return AwayHoveredLabel;
    return planeLabel;
  };

  const label = getLabel();
  return { label };
};

export default useTgIndexLab;
