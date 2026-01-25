import {
  numberNous,
  functionNous,
  alphabetNous,
  commandNous,
  defaultAdjectiveNous,
  homeNous,
} from "./namedLongNous.js";

const alphabetNumberNous = [...alphabetNous, ...numberNous];

const virtualVerstiles = ["space", "muhenkan"];
const allAdjectiveNous = [...defaultAdjectiveNous, ...virtualVerstiles];
const defaultAdjs = ["none", "ctrl", "alt", "shift", "win"];
const notAdjAcCaps = ["basic1", "basic2", "naviTen"];
const acCaps = ["basic1", "basic2", ...defaultAdjs, "naviTen"];
const allAdjs = [...defaultAdjs, ...virtualVerstiles];

export {
  numberNous,
  functionNous,
  alphabetNous,
  commandNous,
  defaultAdjectiveNous,
  alphabetNumberNous,
  allAdjectiveNous,
  defaultAdjs,
  notAdjAcCaps,
  acCaps,
  allAdjs,
  virtualVerstiles,
  homeNous,
};
