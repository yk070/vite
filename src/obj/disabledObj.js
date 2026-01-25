import { defaultAdjectiveNous } from "../array/namedNous.js";
const disabledObj = {
  none: defaultAdjectiveNous,
  ctrl: ["leftCtrl", "rightCtrl"],
  shift: ["leftShift", "rightShift"],
  alt: ["leftAlt", "rightAlt"],
  win: ["leftWin", "rightWin"],
  space: ["space"],
  muhenkan: ["muhenkan"],
};
export default disabledObj;
