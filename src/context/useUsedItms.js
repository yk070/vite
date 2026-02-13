import { useEffect } from "react";
import { defaultAdjs } from "../array/namedArray.js";

const useUsedItms = (ctx) => {
  useEffect(() => {
    const sdAdjs = ctx.usedPrfs.map((obj) => obj.tg?.split("*")[0]);
    const addedVirtualAdjs = sdAdjs.filter((adj) => !defaultAdjs.includes(adj));
    const notIncludedAdjs = addedVirtualAdjs.filter(
      (adj) => !ctx.usedAdjs.includes(adj),
    );
    if (notIncludedAdjs.length)
      ctx.setUsedItms((prev) => {
        return [...prev, ...notIncludedAdjs];
      });
  }, [ctx.usedItms]);
};

export default useUsedItms;
