import {
  numberNous,
  functionNous,
  alphabetNous,
  commandNous,
  combiNous,
  homeNous,
} from "./namedLongNous.js";

const virtualAdjs = ["space", "muhenkan"];
const alphabetNumberNous = [...alphabetNous, ...numberNous];
const allCombiNous = [...combiNous, ...virtualAdjs];
const ModIndexes = ["none", "ctrl", "alt", "shift", "win"];
const preBasicIndexes = ["basic1", "basic2"];
const basicIndexes = ["basic1", "basic2", "naviTen"];
const DefaultIndexes = [...basicIndexes, ...ModIndexes];
const AllIndexes = [...ModIndexes, ...virtualAdjs];

export {
  numberNous,
  functionNous,
  alphabetNous,
  commandNous,
  combiNous,
  alphabetNumberNous,
  allCombiNous,
  ModIndexes,
  basicIndexes,
  DefaultIndexes,
  AllIndexes,
  virtualAdjs,
  homeNous,
};
