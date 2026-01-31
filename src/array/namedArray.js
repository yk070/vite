import {
  alphabetNumberNous,
  defaultAdjectiveNous,
  homeNous,
} from "./namedLongNous.js";

const virtualVerstiles = ["space", "muhenkan"];
const allAdjectiveNous = [...defaultAdjectiveNous, ...virtualVerstiles];
const defaultAdjs = ["none", "ctrl", "alt", "shift", "win"];
const notAdjAcCaps = ["basic1", "basic2", "naviTen"];
const lds = ["capable1", "capable2"];
const acCaps = [
  ...lds,
  "basic1",
  "basic2",
  ...defaultAdjs,
  //  "naviTen"
];
const allAdjs = [...defaultAdjs, ...virtualVerstiles];

export {
  defaultAdjectiveNous,
  alphabetNumberNous,
  allAdjectiveNous,
  defaultAdjs,
  notAdjAcCaps,
  acCaps,
  allAdjs,
  virtualVerstiles,
  homeNous,
  lds,
};
