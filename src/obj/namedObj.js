import { AllIndexes } from "../array/namedMods.js";
import keyStyleObj from "./keyStyleObj.js";

const indexKeyObjObj = Object.fromEntries(
  AllIndexes.map((index) => [index, structuredClone(keyStyleObj)]),
);

const scriptAcModObj = {
  none: "",
  ctrl: "^",
  shift: "+",
  alt: "!",
  win: "#",
};

const acIndexLabelObj = {
  basic1: "Basic1",
  basic2: "Basic2",
  none: "None",
  ctrl: "Ctrl",
  shift: "Shift",
  alt: "Alt",
  win: "Win",
  space: "Space",
  muhenkan: "無変換",
};

const ModBigger = {
  none: "",
  ctrl: "Ctrl",
  shift: "Shift",
  alt: "Alt",
  win: "Win",
  space: "Space",
};

const EnterObj = {
  enter_above: "enter",
  enter_main: "enter",
  enter_below: "enter",
};

const tgIndexObj = {
  basic1: "【Often1】",
  often2: "【Often2】",
  none: "【None】",
  ctrl: "【Ctrl】",
  shift: "【Shift】",
  alt: "【Alt】",
  win: "【Win】",
  space: "【Space】",
};
export {
  scriptAcModObj,
  acIndexLabelObj,
  indexKeyObjObj,
  ModBigger,
  EnterObj,
  tgIndexObj,
};
