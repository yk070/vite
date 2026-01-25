import useCtx from "../context/useCtx.jsx";
import { acCapLabelObj } from "../obj/namedObj.js";
import useTgCapBoo from "./useTgCapBoo.jsx";
import look from "../style/look.jsx";

const useTgCapLab = ({ contextIndex }) => {
  const ctx = useCtx();
  const boo = useTgCapBoo({ contextIndex });
  const planeLabel = (
    <>
      <span>{acCapLabelObj[contextIndex]}</span>
    </>
  );
  const AwayHoveredLabel = (
    <>
      {planeLabel}
      <span>{ctx.AwayhoveredNouLabel}</span>
      {"="}
      <span style={look.TgCap4}>{ctx.HoveredAdjNouTgLabel}</span>
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

export default useTgCapLab;
