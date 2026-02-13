import { useEffect } from "react";

const useCdTgAn = (cx) => {
  useEffect(() => {
    if (!cx.cdAcAn || !cx.cdTgAn) return;

    cx.setUsedItms((prev) => [
      ...prev.filter((obj) => obj.tg !== cx.cdTgAn),
      {
        ac: cx.cdAcAn,
        tg: cx.cdTgAn,
      },
    ]);

    cx.setCdAcObj(null);
    cx.setCdTgAn(null);
  }, [cx.cdTgAn]);
};

export default useCdTgAn;
