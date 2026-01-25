import { acScriptAdjObj } from "../obj/namedObj.js";
import nouScObj from "../obj/nouScObj.js";
import notAdjNouObj from "../obj/notAdjNouObj.js";

const convAcScript = (adjNou) => {
  if (!adjNou.includes("*")) {
    return `{${notAdjNouObj[adjNou]}}`;
  }
  if (adjNou === "alt*tab") {
    return "AltTab";
  }

  const [part1, part2, part3] = adjNou.split("*");

  if (part1 === "none") {
    const label = "{" + nouScObj[part2] + "}";

    return `{\n  send "${label}"\n}`;
  }

  if (part3) {
    const adjLabel1 = acScriptAdjObj[part1];
    const adjLabel2 = acScriptAdjObj[part2];
    const keyLabel = nouScObj[part3];

    const label = adjLabel1 + adjLabel2 + "{" + keyLabel + "}";

    return `{\n  send "${label}"\n}`;
  }

  const adjLabel = acScriptAdjObj[part1];
  const keyLabel = nouScObj[part2];

  const label = adjLabel + "{" + keyLabel + "}";

  return `{\n  send "${label}"\n}`;
};

export default convAcScript;
