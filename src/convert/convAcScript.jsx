import { scriptAcModObj } from "../obj/namedObj.js";
import keyScObj from "../obj/keyScObj.js";
import notModKeyObj from "../obj/notModKeyObj.js";

const convAcScript = (modKey) => {
  if (!modKey.includes("*")) {
    return `{${notModKeyObj[modKey]}}`;
  }
  if (modKey === "alt*tab") {
    return "AltTab";
  }

  const [part1, part2, part3] = modKey.split("*");

  if (part1 === "none") {
    const label = "{" + keyScObj[part2] + "}";

    return `{\n  send "${label}"\n}`;
  }

  if (part3) {
    const modLabel1 = scriptAcModObj[part1];
    const modLabel2 = scriptAcModObj[part2];
    const keyLabel = keyScObj[part3];

    const label = modLabel1 + modLabel2 + "{" + keyLabel + "}";

    return `{\n  send "${label}"\n}`;
  }

  const modLabel = scriptAcModObj[part1];
  const keyLabel = keyScObj[part2];

  const label = modLabel + "{" + keyLabel + "}";

  return `{\n  send "${label}"\n}`;
};

export default convAcScript;
