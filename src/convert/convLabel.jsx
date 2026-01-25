import { ModBigger } from "../obj/namedObj.js";
import nouLabelObj from "../obj/nouLabelObj.js";
import ConvLabelMod from "./ConvLabelMod.jsx";

const ConvLabel = ({ adjKey }) => {
  if (!adjKey) return null;

  const [part1, part2, part3] = adjKey.split("*");
  if (part1 === part2) return null;
  // 修飾キー2つ + 通常キー（例: ctrl*alt*a）
  if (part3) {
    const ModLabel1 = ModBigger[part1] ?? "";
    const ModLabel2 = ModBigger[part2] ?? "";
    const KeyLabel = nouLabelObj[part3] ?? "";

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
    const KeyLabel = nouLabelObj[part2] ?? "";

    return (
      <span>
        <ConvLabelMod label={ModLabel} />
        {KeyLabel}
      </span>
    );
  }

  // 修飾なし or 単体キー
  if (part1) {
    return <span>{adjKey}</span>;
  }

  return null;
};

export default ConvLabel;
