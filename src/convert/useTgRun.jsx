import useCtx from "../context/useCtx.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import useTgBooMerge from "./useTgBooMerge.jsx";

const useTgRun = ({ posiId }) => {
  const ctx = useCtx();
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });
  const merge = useTgBooMerge({ posiId });

  const remove = () => {
    ctx.setAllSettings((prev) =>
      prev.filter((actgObj) => actgObj.tg !== roo.originAdjNou),
    );
  };

  const click = () => {
    if (merge.isSoVirtualHold) ctx.toggleVirtual(roo.originNou);
    if (boo.isDisabled || (merge.isVacant && !ctx.isWoAcSd)) return;
    if (ctx.cdAcAdjNou) {
      if (merge.isAssigned) remove();
      ctx.setSdTgAdjNou(roo.originAdjNou);
    } else if (merge.isAssigned) remove();
    ctx.setHdAdjNouTg(null);
    ctx.setHoverLocktg(roo.originAdjNou);
  };

  const hover = () => {
    if (ctx.HoverLocktg === roo.originAdjNou) return;
    ctx.setHdAdjNouTg(roo.originAdjNou);
  };

  const leave = () => {
    ctx.setHdAdjNouTg(null);
    if (ctx.HoverLocktg === roo.originAdjNou) {
      ctx.setHoverLocktg(null);
    }
  };
  return { click, hover, leave };
};

export default useTgRun;
