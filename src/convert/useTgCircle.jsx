import useCtx from "../context/useCtx.jsx";
import tone from "../style/color.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import look from "../style/look.jsx";

const useTgCircle = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const roo = useTgRoo({ posiId });
  const ctx = useCtx();

  const getLevel = () => {
    const entry = Object.entries(ctx.easyCurrAdjTgObj)?.find(([_, nous]) =>
      nous?.includes(roo.originNou),
    );

    if (boo.isCapableBlockPseudoHd) return entry?.[0] ?? "third";

    if (
      !ctx.isWoAcSd ||
      boo.isSoVirtualHold ||
      boo.isDisabled ||
      boo.isAssigned
    )
      return "";

    return entry?.[0];
  };
  const level = getLevel();

  if (level === "first") return look.first;
  if (level === "second") return look.second;
  if (level === "third") return look.third;
  return null;
};

export default useTgCircle;
