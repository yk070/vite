import disabledObj from "../obj/disabledObj.js";
import importantObj from "../obj/importantObj.js";

const importantModKeys = Object.entries(importantObj).flatMap(([mod, keys]) =>
  keys.map((key) => `${mod}*${key}`),
);

const disabledModKeys = Object.entries(disabledObj).flatMap(([mod, keys]) =>
  keys.map((key) => `${mod}*${key}`),
);

export default disabledModKeys;

export { disabledModKeys, importantModKeys };
