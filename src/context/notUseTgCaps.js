import { defaultAdjs } from "../array/namedArray.js";

export const notUseTgCaps = (ctx) => {
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

  if (ctx.toReviseVirtualAdj && !caps.includes(ctx.toReviseVirtualAdj))
    caps = caps.concat(ctx.toReviseVirtualAdj);
  return caps;
};

export default notUseTgCaps;
