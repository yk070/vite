import { useEffect } from "react";
import { defaultAdjs } from "../array/namedArray.js";

const useAllSettings = (ctx) => {
  useEffect(() => {
    const sdAdjs = ctx.prfs.map((obj) => obj.tg?.split("*")[0]);
    const addedVirtualAdjs = sdAdjs.filter((adj) => !defaultAdjs.includes(adj));
    const notIncludedAdjs = addedVirtualAdjs.filter(
      (adj) => !ctx.exploitedAdjs.includes(adj),
    );
    // console.log(notIncludedAdjs);
    if (notIncludedAdjs.length)
      ctx.setAllSettings((prev) => {
        return [...prev, ...notIncludedAdjs];
      });
  }, [ctx.allSettings]);
};

export default useAllSettings;
