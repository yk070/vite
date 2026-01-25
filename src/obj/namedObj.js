import { AllIndexes } from "../array/namedNous.js";
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
  space: "sc39",
};

const modScObj = {
  none: "",
  ctrl: "sc1D",
  shift: "sc36",
  alt: "sc38",
  win: "sc15B",
  space: "sc39",
  muhenkan: "sc7B",
};

const ModBigger = {
  none: "",
  ctrl: "Ctrl",
  shift: "Shift",
  alt: "Alt",
  win: "Win",
  space: "Space",
  muhenkan: "無変換",
};

const combiIndexObj = {
  ctrl: ["leftCtrl", "rightCtrl"],
  shift: ["leftShift", "rightShift"],
  alt: ["leftAlt", "rightAlt"],
  win: ["leftWin", "rightWin"],
  space: ["space"],
  muhenkan: ["muhenkan"],
};

const modLineObj = {
  ctrl: "leftCtrl",
  alt: "leftAlt",
  shift: "leftShift",
  win: "leftWin",
  space: "space",
  muhenkan: "muhenkan",
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
  EnterObj,
  tgIndexObj,
  ModBigger,
  modScObj,
  combiIndexObj,
  modLineObj,
};
