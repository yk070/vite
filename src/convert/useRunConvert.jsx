import useCtx from "../context/useCtx.jsx";
import TgButtons from "../area/TgButtons.jsx";
import useTgBoo from "../convert/useTgBoo.jsx";
import useTgRoo from "../convert/useTgRoo.jsx";
const useRunConvert = ({ preKey }) => {
  const ctx = useCtx();
  const roo = useTgRoo({ preKey });
  const boo = useTgBoo({ preKey });

  const remove = () => {
    ctx.setAcTgObjs((prev) =>
      prev.filter((actgObj) => actgObj.tg !== roo.originModKey),
    );
  };

  const click = () => {
    if (boo.isSoSpaHold) ctx.toggleAcTg("spaceHold");
    if (boo.isSoMuhHold) ctx.toggleAcTg("muhHold");
    if (boo.isDisabled || (boo.isVacant && !ctx.isWoAcSd)) return;
    if (ctx.sdAcModKey) {
      if (boo.isAssigned) remove();
      ctx.setSdTgModKey(roo.originModKey);
    } else if (boo.isAssigned) remove();
    ctx.setHdModKeyTg(null);
    ctx.setHoverLocktg(roo.originModKey);
  };

  const hover = () => {
    if (ctx.HoverLocktg === roo.originModKey) return;
    ctx.setHdModKeyTg(roo.originModKey);
  };

  const leave = () => {
    ctx.setHdModKeyTg(null);
    if (ctx.HoverLocktg === roo.originModKey) {
      ctx.setHoverLocktg(null);
    }
  };
  return { click, hover, leave };
};

export default useRunConvert;
