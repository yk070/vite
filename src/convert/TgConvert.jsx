import { ModBigger } from "../obj/namedObj.js";
import keyScObj from "../obj/keyScObj.js";

const tgConvert = (modKey) => {
  const [Mod, Key] = modKey.split("*");
  const Namelabel_Mod = ModBigger[Mod] ?? "";
  const Namelabel_Key = keyScObj[Key] ?? Key;
  if (Mod === "none") {
    return Namelabel_Key;
  }
  return `${Namelabel_Mod} & ${Namelabel_Key}`;
};
export default tgConvert;
