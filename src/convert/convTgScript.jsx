import { modScObj } from "../obj/namedObj.js";
import keyScObj from "../obj/keyScObj.js";

const convTgScript = (modKey) => {
  const [mod, key] = modKey.split("*");
  const labelMod = modScObj[mod];
  const labelKey = keyScObj[key] ?? key;
  if (mod === "none") return labelKey;
  return `${labelMod} & ${labelKey}`;
};
export default convTgScript;
