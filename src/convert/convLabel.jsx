import { ModBigger } from "../obj/namedObj.js";
import keyLabelObj from "../obj/keyLabelObj.js";
import ModLabelReuse from "../reuse/ModLabelReuse.jsx";
const convLabel = (modKey) => {
  if (!modKey) return null;
  const [part1, part2, part3] = modKey?.split("*") ?? [];
  if (part3) {
    const ModLabel1 = ModBigger[part1] ?? "";
    const ModLabel2 = ModBigger[part2] ?? "";
    const KeyLabel = keyLabelObj[part3] ?? "";
    return (
      <span>
        <ModLabelReuse label={ModLabel1} />
        <ModLabelReuse label={ModLabel2} />
        {KeyLabel}
      </span>
    );
  }
  if (part2) {
    const ModLabel = ModBigger[part1] ?? "";
    const KeyLabel = keyLabelObj[part2] ?? "";
    return (
      <span>
        <ModLabelReuse label={ModLabel} />
        {KeyLabel}
      </span>
    );
  }
  if (part1) {
    return <span>{modKey}</span>;
  }
};
export default convLabel;
