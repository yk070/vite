import { adjScObj } from "../obj/namedObj.js";
import nouScObj from "../obj/nouScObj.js";

const convTgScript = (x) => {
  const [adj, key] = x.split("*");
  const adjSc = adjScObj[adj];
  const nouSc = nouScObj[key] ?? key;
  if (adj === "none") return nouSc;
  return `${adjSc} & ${nouSc}`;
};
export default convTgScript;
