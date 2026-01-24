import { ModifierKeys } from "./namedKeys.js";

const importantModKeys = [
  {
    mod: "none",
    keys: ["enter", "space", "tab", "backspace", "esc", "hankaku"],
  },
  { mod: "ctrl", keys: ["a", "s", "d", "f", "j", "k", "l", "semicolon"] },
  { mod: "alt", keys: ["tab"] },
].flatMap(({ mod, keys }) => keys.map((key) => `${mod}*${key}`));

const disabledModKeys = [
  { mod: "none", keys: ModifierKeys },
  { mod: "ctrl", keys: [] },
  { mod: "alt", keys: [] },
].flatMap(({ mod, keys }) => keys.map((key) => `${mod}*${key}`));
export { disabledModKeys, importantModKeys };
