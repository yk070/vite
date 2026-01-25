import { allAdjs } from "../array/namedNous.js";
import posiIdObj from "./posiIdObj.js";

const adjPosiIdObjObj = Object.fromEntries(
  allAdjs.map((index) => [index, structuredClone(posiIdObj)]),
);

const scriptAcModObj = {
  none: "",
  ctrl: "^",
  shift: "+",
  alt: "!",
  win: "#",
  space: "sc39",
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

const ModBigger = {
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

export {
  scriptAcModObj,
  acCapLabelObj,
  adjPosiIdObjObj,
  EnterObj,
  ModBigger,
  adjScObj,
  adjAdjectiveNousObj,
  adjLineObj,
};
