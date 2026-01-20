import { ModBigger } from "../obj/namedObj.jsx";
import tgScriptObj from "../obj/tgScriptObj.jsx";

const tgConvert = (modKey) => {
  const [Mod, Key] = modKey.split("*");
  const Namelabel_Mod = ModBigger[Mod] ?? "";
  const Namelabel_Key = tgScriptObj[Key] ?? Key;
  if (Mod === "none") {
    return Namelabel_Key;
  }
  return `${Namelabel_Mod} & ${Namelabel_Key}`;
};
export default tgConvert;
