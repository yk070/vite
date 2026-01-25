import { adjScObj } from "../obj/namedObj.js";
import nouScObj from "../obj/nouScObj.js";

const convTgScript = (adjNou) => {
  const [adj, key] = adjNou.split("*");
  const adjSc = adjScObj[adj];
  const nouSc = nouScObj[key] ?? key;
  if (adj === "none") return nouSc;
  return `${adjSc} & ${nouSc}`;
};
export default convTgScript;
