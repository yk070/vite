import { ModifierKeys } from "./namedKeys.jsx";

// const ImportantModKeys = ["none*space", "none*tab"];

const DisabledModKeys = [
  { mod: "none", keys: ModifierKeys },
  { mod: "ctrl", keys: [] },
  { mod: "alt", keys: [] },
].flatMap(({ mod, keys }) => keys.map((key) => `${mod}*${key}`));
export { DisabledModKeys };
