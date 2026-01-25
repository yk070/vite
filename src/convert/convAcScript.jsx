import { scriptAcModObj } from "../obj/namedObj.js";
import nouScObj from "../obj/nouScObj.js";
import notAdjNouObj from "../obj/notAdjNouObj.js";

const convAcScript = (adjKey) => {
  if (!adjKey.includes("*")) {
    return `{${notAdjNouObj[adjKey]}}`;
  }
  if (adjKey === "alt*tab") {
    return "AltTab";
  }

  const [part1, part2, part3] = adjKey.split("*");

  if (part1 === "none") {
    const label = "{" + nouScObj[part2] + "}";

    return `{\n  send "${label}"\n}`;
  }

  if (part3) {
    const adjLabel1 = scriptAcModObj[part1];
    const adjLabel2 = scriptAcModObj[part2];
    const keyLabel = nouScObj[part3];

    const label = adjLabel1 + adjLabel2 + "{" + keyLabel + "}";

    return `{\n  send "${label}"\n}`;
  }

  const adjLabel = scriptAcModObj[part1];
  const keyLabel = nouScObj[part2];

  const label = adjLabel + "{" + keyLabel + "}";

  return `{\n  send "${label}"\n}`;
};

export default convAcScript;
