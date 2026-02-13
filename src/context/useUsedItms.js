import { useEffect } from "react";
import { defaultAdjs } from "../array/namedArray.js";

const useUsedItms = (cx) => {
  useEffect(() => {
    const sdAdjs = cx.usedPrfs.map((obj) => obj.tg?.split("*")[0]);
    const addedVirtualAdjs = sdAdjs.filter((adj) => !defaultAdjs.includes(adj));
    const notIncludedAdjs = addedVirtualAdjs.filter(
      (adj) => !cx.usedAdjs.includes(adj),
    );
    if (notIncludedAdjs.length)
      cx.setUsedItms((prev) => {
        return [...prev, ...notIncludedAdjs];
      });
  }, [cx.usedItms]);
};

export default useUsedItms;
