import disabledObj from "../obj/disabledObj.js";
import importantObj from "../obj/importantObj.js";

const importantModNous = Object.entries(importantObj).flatMap(([mod, keys]) =>
  keys.map((key) => `${mod}*${key}`),
);

const disabledModNous = Object.entries(disabledObj).flatMap(([mod, keys]) =>
  keys.map((key) => `${mod}*${key}`),
);

export default disabledModNous;

export { disabledModNous, importantModNous };
