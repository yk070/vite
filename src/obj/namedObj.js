import { ModIndexes, AllIndexes } from "../array/namedMods.js";

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

import keyObjs from "../array/keyObjs.js";
const ModButtonsObj = Object.fromEntries(
  AllIndexes.map((contextIndex) => [
    contextIndex,
    keyObjs.map((KeyObj) => ({ ...KeyObj })),
  ]),
);

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
  ModButtonsObj,
  ModBigger,
  EnterObj,
  tgIndexObj,
};
