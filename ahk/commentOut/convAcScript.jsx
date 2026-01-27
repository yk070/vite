import { acScriptAdjObj } from "../../src/obj/namedObj.js";
import nouScObj from "../../src/obj/nouScObj.js";
import notAdjNouObj from "../../src/obj/notAdjNouObj.js";

const convAcScript = (x) => {
  if (!x.includes("*")) {
    return `{${notAdjNouObj[x]}}`;
  }
  if (x === "alt*tab") {
    return "AltTab";
  }

  const [part1, part2, part3] = x.split("*");

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
