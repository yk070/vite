import useCtx from "../context/useCtx.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useTgBooMerge from "./useTgBooMerge.jsx";

const useTgRun = ({ posiId }) => {
  const cx = useCtx();
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });
  const merge = useTgBooMerge({ posiId });

  const remove = () => {
    cx.setUsedItms((prev) =>
      prev.filter((actgObj) => actgObj.tg !== roo.rawAn),
    );
  };

  const click = () => {
    if (merge.isSoVirtualHold) cx.toggleVirtual(roo.rawNou);
    if (boo.isDisabled || (merge.isVacant && !cx.isWoAcSd)) return;
    if (cx.cdAcAn) {
      if (merge.isAssigned) remove();
      cx.setCdTgAn(roo.rawAn);
    } else if (merge.isAssigned) remove();
    cx.setHdAnTg(null);
    cx.setHoverLocktg(roo.rawAn);
  };

  const hover = () => {
    if (cx.HoverLocktg === roo.rawAn) return;
    cx.setHdAnTg(roo.rawAn);
  };

  const leave = () => {
    cx.setHdAnTg(null);
    if (cx.HoverLocktg === roo.rawAn) {
      cx.setHoverLocktg(null);
    }
  };
  return { click, hover, leave };
};

export default useTgRun;
