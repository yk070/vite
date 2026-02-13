import useCtx from "../context/useCtx.jsx";
import { acCapLabelObj } from "../obj/namedObj.js";
import useTgCapBoo from "./useTgCapBoo.jsx";
import look from "../style/look.jsx";

const useTgCapLab = ({ tgCap }) => {
  const cx = useCtx();
  const boo = useTgCapBoo({ tgCap });
  const planeLabel = (
    <>
      <span>{acCapLabelObj[tgCap]}</span>
    </>
  );
  const RemoteHoveredLabel = (
    <>
      {planeLabel}
      <span>{cx.remoteHdNouLabel}</span>
      {"="}
      <span style={look.TgCap4}>{cx.hdAnTgLabel}</span>
    </>
  );
  {
    <></>;
  }
  const getLabel = () => {
    if (boo.isFunctionPsHd) return RemoteHoveredLabel;
    return planeLabel;
  };

  const label = getLabel();
  return { label };
};

export default useTgCapLab;
