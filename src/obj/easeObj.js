import { homeNous } from "../array/namedArray.js";
const easeObj = {
  none: {
    first: ["space", "tab", "capslock", "muhenkan"],
    second: ["hankaku", "henkan"],
  },
  ctrl: {
    first: [...homeNous, "space", "muhenkan"],
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
    first: [...homeNous],
    second: [],
  },
  muhenkan: {
    first: [...homeNous],
    second: [],
  },
};
export default easeObj;
