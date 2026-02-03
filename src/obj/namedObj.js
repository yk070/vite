import { allAdjs } from "../array/namedArray.js";
import posiIdObj from "./posiIdObj.js";

const adjPosiIdObjObj = Object.fromEntries(
  allAdjs.map((index) => [index, structuredClone(posiIdObj)]),
);

const levelConfig = {
  first: {
    stroke: 32,
  },
  second: {
    stroke: 16,
  },
  third: {
    stroke: 5,
  },
};

const acScriptAdjObj = {
  none: "",
  ctrl: "^",
  shift: "+",
  alt: "!",
  win: "#",
  space: "sc39",
  muhenkan: "sc7B",
};

const adjScObj = {
  none: "",
  ctrl: "sc1D",
  shift: "sc36",
  alt: "sc38",
  win: "sc15B",
  space: "sc39",
  muhenkan: "sc7B",
};

const adjLabelObj = {
  none: "",
  ctrl: "Ctrl",
  shift: "Shift",
  alt: "Alt",
  win: "Win",
  space: "Space",
  muhenkan: "無変換",
};

const adjAdjectiveNousObj = {
  ctrl: ["leftCtrl", "rightCtrl"],
  shift: ["leftShift", "rightShift"],
  alt: ["leftAlt", "rightAlt"],
  win: ["leftWin", "rightWin"],
  space: ["space"],
  muhenkan: ["muhenkan"],
};

const adjLineObj = {
  ctrl: "leftCtrl",
  alt: "leftAlt",
  shift: "leftShift",
  win: "leftWin",
  space: "space",
  muhenkan: "muhenkan",
};
const acCapLabelObj = {
  capable1: "一括1",
  capable2: "一括2",
  usable1: "基本1",
  usable2: "基本2",
  none: "None",
  ctrl: "Ctrl",
  shift: "Shift",
  alt: "Alt",
  win: "Win",
  space: "Space",
  muhenkan: "無変換",
  naviTen: "テンキー",
};

const EnterObj = {
  enter_above: "enter",
  enter_main: "enter",
  enter_below: "enter",
};

export {
  acScriptAdjObj,
  acCapLabelObj,
  adjPosiIdObjObj,
  EnterObj,
  adjLabelObj,
  adjScObj,
  adjAdjectiveNousObj,
  adjLineObj,
  levelConfig,
};
