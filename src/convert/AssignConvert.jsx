import { ModBigger } from "../obj/namedObj.jsx";
import keyLabelObj from "../obj/keyLabelObj.jsx";
import ModLabelReuse from "../reuse/ModLabelReuse.jsx";
const AssignConvert = (modKey) => {
  if (!modKey) return null;
  const [Part1, Part2, Part3] = modKey?.split("*") ?? [];
  if (Part3) {
    const ModLabel1 = ModBigger[Part1] ?? "";
    const ModLabel2 = ModBigger[Part2] ?? "";
    const KeyLabel = keyLabelObj[Part3] ?? "";
    return (
      <span>
        <ModLabelReuse label={ModLabel1} />
        <ModLabelReuse label={ModLabel2} />
        {KeyLabel}
      </span>
    );
  }
  const ModLabel = ModBigger[Part1] ?? "";
  const KeyLabel = keyLabelObj[Part2] ?? "";
  return (
    <span>
      <ModLabelReuse label={ModLabel} />
      {KeyLabel}
    </span>
  );
};
export default AssignConvert;
