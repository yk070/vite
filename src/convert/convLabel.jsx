import { ModBigger } from "../obj/namedObj.js";
import keyLabelObj from "../obj/keyLabelObj.js";
import ConvLabelMod from "./ConvLabelMod.jsx";

const ConvLabel = ({ modKey }) => {
  if (!modKey) return null;

  const [part1, part2, part3] = modKey.split("*");

  // 修飾キー2つ + 通常キー（例: ctrl*alt*a）
  if (part3) {
    const ModLabel1 = ModBigger[part1] ?? "";
    const ModLabel2 = ModBigger[part2] ?? "";
    const KeyLabel = keyLabelObj[part3] ?? "";

    return (
      <span>
        <ConvLabelMod label={ModLabel1} />
        <ConvLabelMod label={ModLabel2} />
        {KeyLabel}
      </span>
    );
  }

  // 修飾キー1つ + 通常キー（例: ctrl*a）
  if (part2) {
    const ModLabel = ModBigger[part1] ?? "";
    const KeyLabel = keyLabelObj[part2] ?? "";

    return (
      <span>
        <ConvLabelMod label={ModLabel} />
        {KeyLabel}
      </span>
    );
  }

  // 修飾なし or 単体キー
  if (part1) {
    return <span>{modKey}</span>;
  }

  return null;
};

export default ConvLabel;
