import useCtx from "../context/useCtx.jsx";
import useTgBoo from "./useTgBoo.jsx";
import useTgRoo from "./useTgRoo.jsx";
import look from "../style/look.jsx";
import useTgBooMerge from "./useTgBooMerge.jsx";

const useTgCircle = ({ posiId }) => {
  const boo = useTgBoo({ posiId });
  const roo = useTgRoo({ posiId });
  const merge = useTgBooMerge({ posiId });
  const ctx = useCtx();

  const getLevel = () => {
    const entry = Object.entries(ctx.easyCurrAdjTgObj)?.find(([_, nous]) =>
      nous?.includes(roo.originNou),
    );

    if (boo.isMoPsHd) return entry?.[0] ?? "third";

    if (
      !ctx.isWoAcSd ||
      merge.isSoVirtualHold ||
      boo.isDisabled ||
      merge.isAssigned
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
