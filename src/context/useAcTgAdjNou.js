import { useEffect } from "react";

const useAcTgAdjNou = (ctx) => {
  useEffect(() => {
    if (!ctx.cdAcAdjNou || !ctx.sdTgAdjNou) return;

    ctx.setAllSettings((prev) => [
      ...prev.filter((obj) => obj.tg !== ctx.sdTgAdjNou),
      {
        ac: ctx.cdAcAdjNou,
        tg: ctx.sdTgAdjNou,
      },
    ]);

    ctx.setCdAcAdjNou(null);
    ctx.setSdTgAdjNou(null);
  }, [ctx.cdAcAdjNou, ctx.sdTgAdjNou]);
};

export default useAcTgAdjNou;
