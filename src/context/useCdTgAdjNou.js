import { useEffect } from "react";

const useCdTgAdjNou = (ctx) => {
  useEffect(() => {
    if (!ctx.cdAcAdjNou || !ctx.cdTgAdjNou) return;

    ctx.setUsedItms((prev) => [
      ...prev.filter((obj) => obj.tg !== ctx.cdTgAdjNou),
      {
        ac: ctx.cdAcAdjNou,
        tg: ctx.cdTgAdjNou,
      },
    ]);

    ctx.setCdAcObj(null);
    ctx.setCdTgAdjNou(null);
  }, [ctx.cdTgAdjNou]);
};

export default useCdTgAdjNou;
