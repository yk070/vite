import { scriptAcModObj } from "../obj/namedObj.jsx";
import scObj from "../obj/scObj.jsx";
const acConvert = (modKey) => {
  const [Mod, Key] = modKey.split("*");
  const Namelabel_Mod = scriptAcModObj[Mod] ?? "";
  const Namelabel_Key = scObj[Key] ?? Key;

  if (modKey === "alt*tab") {
    return `AltTab`;
  }

  if (Mod === "none") {
    return `send "{${Namelabel_Key}}"`;
  }
  return `send "${Namelabel_Mod} {${Namelabel_Key}}"`;
};
export default acConvert;
