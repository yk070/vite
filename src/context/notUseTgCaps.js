import { defaultAdjs } from "../array/namedArray.js";

export const notUseTgCaps = (cx) => {
  let caps = [...defaultAdjs];

  if (cx.usedAdjs.includes("space") && !caps.includes("space")) {
    caps = caps.concat("space");
  }
  if (cx.usedAdjs.includes("muhenkan") && !caps.includes("muhenkan")) {
    caps = caps.concat("muhenkan");
  }

  const extraAdj = cx.hdCaSingleBlockObj?.adj;
  if (
    (extraAdj === "space" || extraAdj === "muhenkan") &&
    !caps.includes(extraAdj)
  ) {
    caps = caps.concat(extraAdj);
  }

  if (cx.toReviseAdj && !caps.includes(cx.toReviseAdj))
    caps = caps.concat(cx.toReviseAdj);
  return caps;
};

export default notUseTgCaps;
