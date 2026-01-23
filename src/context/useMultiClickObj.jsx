import { useEffect } from "react";
import multiObj from "../obj/multiObj.jsx";

const useMultiClickObj = (base, main) => {
  useEffect(() => {
    base.setCdMultiObj(null);
    const objs = base.cdMultiObjs?.objs;
    if (objs == null) return;
    if (!Array.isArray(objs)) return;
    if (!objs) return;

    base.setAcTgObjs((prev) => {
      const filteredAcTgObjs = prev.filter(
        (acTgObj) =>
          !objs.some((targetMiniObj) => targetMiniObj.tg === acTgObj.tg),
      );
      const isAlreadySd = objs?.every((targetMiniObj) =>
        main.acTgSet.has(`${targetMiniObj.ac}|${targetMiniObj.tg}`),
      );
      return isAlreadySd ? filteredAcTgObjs : [...filteredAcTgObjs, ...objs];
    });
  }, [base.cdMultiObjs, base.currentModTg]);
};

export default useMultiClickObj;
