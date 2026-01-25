import useCtx from "../context/useCtx.jsx";
import { acCapLabelObj } from "../obj/namedObj.js";
import useTgCapBoo from "./useTgCapBoo.jsx";
import look from "../style/look.jsx";

const useTgCapLab = ({ tgCap }) => {
  const ctx = useCtx();
  const boo = useTgCapBoo({ tgCap });
  const planeLabel = (
    <>
      <span>{acCapLabelObj[tgCap]}</span>
    </>
  );
  const RemoteHoveredLabel = (
    <>
      {planeLabel}
      <span>{ctx.remoteHdNouLabel}</span>
      {"="}
      <span style={look.TgCap4}>{ctx.hdAdjNouTgLabel}</span>
    </>
  );
  {
    <></>;
  }
  const getLabel = () => {
    if (boo.isRemoteHovered) return RemoteHoveredLabel;
    return planeLabel;
  };

  const label = getLabel();
  return { label };
};

export default useTgCapLab;
