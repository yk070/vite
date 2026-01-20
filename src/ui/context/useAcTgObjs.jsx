import { useEffect } from "react";

const useactgObjs = (base) => {
  useEffect(() => {
    if (!base.sdAcModKey || !base.sdTgModKey) return;

    base.setAcTgObjs((prev) => [
      ...prev.filter((obj) => obj.tg !== base.sdTgModKey),
      {
        ac: base.sdAcModKey,
        tg: base.sdTgModKey,
      },
    ]);

    base.setSdAcModKey(null);
    base.setSdTgModKey(null);
  }, [base.sdAcModKey, base.sdTgModKey]);
};

export default useactgObjs;
