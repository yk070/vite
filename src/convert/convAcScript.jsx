import { scriptAcModObj } from "../obj/namedObj.js";
import keyScObj from "../obj/keyScObj.js";
import notModKeyObj from "../obj/notModKeyObj.js";
const convAcScript = (modKey) => {
  const [Mod, Key] = modKey.split("*");
  if (!modKey.includes("*")) {
    return notModKeyObj[modKey];
  }
  const Namelabel_Mod = scriptAcModObj[Mod] ?? "";
  const Namelabel_Key = keyScObj[Key] ?? Key;

  if (modKey === "alt*tab") {
    return `AltTab`;
  }

  if (Mod === "none") {
    return `send "{${Namelabel_Key}}"`;
  }
  return `send "${Namelabel_Mod}{${Namelabel_Key}}"`;
};
export default convAcScript;
