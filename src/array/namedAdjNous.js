import disabledObj from "../obj/disabledObj.js";
import importantObj from "../obj/importantObj.js";

const importantAdjNous = Object.entries(importantObj).flatMap(([adj, nous]) =>
  nous.map((key) => `${adj}*${key}`),
);

const disabledAdjNous = Object.entries(disabledObj).flatMap(([adj, nous]) =>
  nous.map((key) => `${adj}*${key}`),
);

export default disabledAdjNous;

export { disabledAdjNous, importantAdjNous };
