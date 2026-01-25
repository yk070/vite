import { useEffect } from "react";

const useAcTgObjs = (base) => {
  useEffect(() => {
    if (!base.sdAcAdjNou || !base.sdTgAdjNou) return;

    base.setAcTgObjs((prev) => [
      ...prev.filter((obj) => obj.tg !== base.sdTgAdjNou),
      {
        ac: base.sdAcAdjNou,
        tg: base.sdTgAdjNou,
      },
    ]);

    base.setSdAcAdjNou(null);
    base.setSdTgAdjNou(null);
  }, [base.sdAcAdjNou, base.sdTgAdjNou]);
};

export default useAcTgObjs;
