import { useEffect } from "react";

const usePreferences = (ctx) => {
  useEffect(() => {
    if (!ctx.sdAcAdjNou || !ctx.sdTgAdjNou) return;

    ctx.setPreferences((prev) => [
      ...prev.filter((obj) => obj.tg !== ctx.sdTgAdjNou),
      {
        ac: ctx.sdAcAdjNou,
        tg: ctx.sdTgAdjNou,
      },
    ]);

    ctx.setSdAcAdjNou(null);
    ctx.setSdTgAdjNou(null);
  }, [ctx.sdAcAdjNou, ctx.sdTgAdjNou]);
};

export default usePreferences;
