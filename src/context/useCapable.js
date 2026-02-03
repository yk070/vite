import { useEffect, useRef } from "react";

const useCapable = (ctx) => {
  const isCapableHdRef = useRef(ctx.isCapableAreaHd);
  const adjRef = useRef(null);

  useEffect(() => {
    if (!isCapableHdRef.current && ctx.isCapableAreaHd) {
      adjRef.current = ctx.currAdjTg;
    }
    if (isCapableHdRef.current && !ctx.isCapableAreaHd) {
      ctx.setCurrAdjTg(adjRef.current);
    }
    if (ctx.hdCapableBlockAdj) ctx.setCurrAdjTg(ctx.hdCapableBlockAdj);

    isCapableHdRef.current = ctx.isCapableAreaHd;
  }, [ctx.isCapableAreaHd, ctx.hdCapableBlockAdj]);

  useEffect(() => {
    if (!ctx.cdCapableObjs) return;
    ctx.setCdCapableObj(null);
    ctx.setCurrAdjTg(ctx.cdCapableAdj);
    adjRef.current = ctx.cdCapableAdj;

    ctx.setPreferences((prev) => {
      const filteredPreferences = prev.filter(
        (acTgObj) =>
          !ctx.cdCapableObjs.some(
            (targetMiniObj) => targetMiniObj.tg === acTgObj.tg,
          ),
      );
      const isAlreadySd = ctx.cdCapableObjs?.every((targetMiniObj) =>
        ctx.acTgSet.has(`${targetMiniObj.ac}|${targetMiniObj.tg}`),
      );

      let nextPreferences = [...filteredPreferences];
      if (!isAlreadySd) {
        nextPreferences = [...nextPreferences, ...ctx.cdCapableObjs];
      }
      if (!prev.includes(ctx.cdCapableAdj)) {
        nextPreferences = [...nextPreferences, ctx.cdCapableAdj];
      }
      return nextPreferences;
    });
  }, [ctx.cdCapableObjs]);
};

export default useCapable;
