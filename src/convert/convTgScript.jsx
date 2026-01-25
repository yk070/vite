import { adjScObj } from "../obj/namedObj.js";
import nouScObj from "../obj/nouScObj.js";

const convTgScript = (adjKey) => {
  const [adj, key] = adjKey.split("*");
  const labelMod = adjScObj[adj];
  const labelKey = nouScObj[key] ?? key;
  if (adj === "none") return labelKey;
  return `${labelMod} & ${labelKey}`;
};
export default convTgScript;
