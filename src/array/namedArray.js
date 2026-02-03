import {
  alphabetNumberNous,
  defaultAdjectiveNous,
  homeNous,
} from "./namedLongNous.js";

const virtualVersatiles = ["space", "muhenkan"];
const allAdjectiveNous = [...defaultAdjectiveNous, ...virtualVersatiles];
const defaultAdjs = ["none", "ctrl", "alt", "shift", "win"];
const usableCaps = [
  "usable1",
  "usable2",
  //  "naviTen"
];
const capableCaps = ["capable1", "capable2"];
const acCaps = [...capableCaps, ...usableCaps, ...defaultAdjs];
const allAdjs = [...defaultAdjs, ...virtualVersatiles];

export {
  defaultAdjectiveNous,
  alphabetNumberNous,
  allAdjectiveNous,
  defaultAdjs,
  usableCaps,
  acCaps,
  allAdjs,
  virtualVersatiles,
  homeNous,
  capableCaps,
};
