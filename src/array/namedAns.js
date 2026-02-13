import disabledObj from "../obj/disabledObj.js";
import importantObj from "../obj/importantObj.js";

const importantAns = Object.entries(importantObj).flatMap(([adj, nous]) =>
  nous.map((key) => `${adj}*${key}`),
);

const disabledAns = Object.entries(disabledObj).flatMap(([adj, nous]) =>
  nous.map((key) => `${adj}*${key}`),
);

export default disabledAns;

export { disabledAns, importantAns };
