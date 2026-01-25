import {
  numberKeys,
  functionKeys,
  alphabetKeys,
  commandKeys,
  combiKeys,
} from "./namedLongKeys.js";

const virtualCombiKeys = ["space", "muhenkan"];
const alphabetNumberKeys = [...alphabetKeys, ...numberKeys];
const allCombiKeys = [...combiKeys, ...virtualCombiKeys];
const ModIndexes = ["none", "ctrl", "alt", "shift", "win"];
const basicIndexes = ["basic1", "basic2"];
const DefaultIndexes = [...basicIndexes, ...ModIndexes];
const AllIndexes = [...ModIndexes, ...virtualCombiKeys];

export {
  numberKeys,
  functionKeys,
  alphabetKeys,
  commandKeys,
  combiKeys,
  alphabetNumberKeys,
  allCombiKeys,
  ModIndexes,
  basicIndexes,
  DefaultIndexes,
  AllIndexes,
  virtualCombiKeys,
};
