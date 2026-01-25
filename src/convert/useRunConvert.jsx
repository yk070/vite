import useCtx from "../context/useCtx.jsx";
import TgEles from "../area/TgEles.jsx";
import useTgBoo from "../convert/useTgBoo.jsx";
import useTgRoo from "../convert/useTgRoo.jsx";
const useRunConvert = ({ posiId }) => {
  const ctx = useCtx();
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });

  const remove = () => {
    ctx.setAcTgObjs((prev) =>
      prev.filter((actgObj) => actgObj.tg !== roo.originAdjNou),
    );
  };

  const click = () => {
    if (boo.isSoSpaHold) ctx.toggleAcTg("spaceHold");
    if (boo.isSoMuhHold) ctx.toggleAcTg("muhHold");
    if (boo.isDisabled || (boo.isVacant && !ctx.isWoAcSd)) return;
    if (ctx.sdAcAdjNou) {
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

export default useRunConvert;
