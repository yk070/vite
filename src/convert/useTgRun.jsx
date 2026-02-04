import useCtx from "../context/useCtx.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
const useTgRun = ({ posiId }) => {
  const ctx = useCtx();
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });

  const remove = () => {
    ctx.setAllSettings((prev) =>
      prev.filter((actgObj) => actgObj.tg !== roo.originAdjNou),
    );
  };

  const click = () => {
    if (boo.isSoSpaHold) ctx.toggleVirtual("space");
    if (boo.isSoMuhHold) ctx.toggleVirtual("muhenkan");
    if (boo.isDisabled || (boo.isVacant && !ctx.isWoAcSd)) return;
    if (ctx.cdAcAdjNou) {
      if (boo.isAssigned) remove();
      ctx.setSdTgAdjNou(roo.originAdjNou);
    } else if (boo.isAssigned) remove();
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
