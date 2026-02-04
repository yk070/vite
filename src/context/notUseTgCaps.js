import { defaultAdjs } from "../array/namedArray.js";

export const notUseTgCaps = (ctx) => {
  const getTgCaps = (ctx) => {
    let caps = [...defaultAdjs];

    if (ctx.exploitedAdjs.includes("space") && !caps.includes("space")) {
      caps = caps.concat("space");
    }
    if (ctx.exploitedAdjs.includes("muhenkan") && !caps.includes("muhenkan")) {
      caps = caps.concat("muhenkan");
    }

    const extraAdj = ctx.hdCapableBlockObj?.adj;
    if (
      (extraAdj === "space" || extraAdj === "muhenkan") &&
      !caps.includes(extraAdj)
    ) {
      caps = caps.concat(extraAdj);
    }

    return caps;
  };

  const tgCaps = getTgCaps(ctx);
  return { tgCaps };
};

export default notUseTgCaps;
