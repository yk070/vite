import { scriptAcModObj } from "../obj/namedObj.js";
import keyScObj from "../obj/keyScObj.js";
import { ModIndexes } from "../array/namedMods.js";

const convTgScript = (modKey) => {
  const [mod, key] = modKey.split("*");
  const Namelabel_Mod = scriptAcModObj[mod] ?? "";
  const getLabel = () => {
    if (ModIndexes.includes(mod)) return "";
    return " & ";
  };
  const label = getLabel();
  const Namelabel_Key = keyScObj[key] ?? key;
  if (mod === "none") {
    return Namelabel_Key;
  }
  return `${Namelabel_Mod}${label}${Namelabel_Key}`;
};
export default convTgScript;
