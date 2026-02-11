import { defaultAdjs } from "../array/namedArray.js";

export const notUseTgCaps = (ctx) => {
  let caps = [...defaultAdjs];

  if (ctx.usedAdjs.includes("space") && !caps.includes("space")) {
    caps = caps.concat("space");
  }
  if (ctx.usedAdjs.includes("muhenkan") && !caps.includes("muhenkan")) {
    caps = caps.concat("muhenkan");
  }

  const extraAdj = ctx.hdCaSingleBlockObj?.adj;
  if (
    (extraAdj === "space" || extraAdj === "muhenkan") &&
    !caps.includes(extraAdj)
  ) {
    caps = caps.concat(extraAdj);
  }

  if (ctx.toReviseAdj && !caps.includes(ctx.toReviseAdj))
    caps = caps.concat(ctx.toReviseAdj);
  return caps;
};

export default notUseTgCaps;
