import { homeNous } from "../array/namedArray.js";
const easyObj = {
  none: {
    first: [
      //2
      "tab",
      //3
      "capslock",
      //5
      "space",
      "muhenkan",
    ],
    second: [
      //1
      "hankaku",
      //5
      "henkan",
    ],
  },
  ctrl: {
    first: [
      //3
      ...homeNous,
      //5
      "space",
      "muhenkan",
    ],
    second: ["tab", "capslock"],
  },
  alt: {
    first: [],
    second: [],
  },
  shift: {
    first: [],
    second: [],
  },
  win: {
    first: [],
    second: [],
  },
  space: {
    first: [
      //3
      ...homeNous,
      //5
      "leftCtrl",
    ],
    second: [
      //4
      "leftShift",
    ],
  },
  muhenkan: {
    first: [
      //3
      ...homeNous,
    ],
    second: [],
  },
};
export default easyObj;
