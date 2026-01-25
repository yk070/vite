import { adjLabelObj } from "../obj/namedObj.js";
import nouLabelObj from "../obj/nouLabelObj.js";
import ConvLabelAdj from "./ConvLabelAdj.jsx";

const ConvLabel = ({ adjNou }) => {
  if (!adjNou) return null;

  const [part1, part2, part3] = adjNou.split("*");
  if (part1 === part2) return null;
  // 修飾キー2つ + 通常キー（例: ctrl*alt*a）
  if (part3) {
    const adjLabel1 = adjLabelObj[part1] ?? "";
    const adjLabel2 = adjLabelObj[part2] ?? "";
    const KeyLabel = nouLabelObj[part3] ?? "";

    return (
      <span>
        <ConvLabelAdj label={adjLabel1} />
        <ConvLabelAdj label={adjLabel2} />
        {KeyLabel}
      </span>
    );
  }

  // 修飾キー1つ + 通常キー（例: ctrl*a）
  if (part2) {
    const adjLabel = adjLabelObj[part1] ?? "";
    const KeyLabel = nouLabelObj[part2] ?? "";

    return (
      <span>
        <ConvLabelAdj label={adjLabel} />
        {KeyLabel}
      </span>
    );
  }

  // 修飾なし or 単体キー
  if (part1) {
    return <span>{adjNou}</span>;
  }

  return null;
};

export default ConvLabel;
