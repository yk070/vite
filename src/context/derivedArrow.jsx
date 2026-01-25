import convPosition from "../convert/convPosition.jsx";
import nouLabelObj from "../obj/nouLabelObj.js";
import ConvLabel from "../convert/ConvLabel.jsx";

export const derivedArrow = (base, main) => {
  const HoveredAdjNouTgLabel = <ConvLabel adjKey={base.hdAdjNouTg} />;

  const [HoveredAdj, hoveredNou] = base.hdAdjNouTg?.split("*") ?? [];
  const { x: TailX, y: TailY } = convPosition(hoveredNou);
  const AwayHoveredAdjNou = base.acTgObjs?.find(
    (o) => o.ac === base.hdAdjNouTg,
  )?.tg;
  const isAwayExist = !!AwayHoveredAdjNou;
  const [AwayHoveredAdj, AwayhoveredNou] = AwayHoveredAdjNou?.split("*") ?? [];
  const AwayhoveredNouLabel = nouLabelObj[AwayhoveredNou];

  const IndexesNumber = main.contextIndexes.length;
  const HomeNumber = main.contextIndexes.indexOf(HoveredAdj);
  const AwayNumber = main.contextIndexes.indexOf(AwayHoveredAdj);
  const currentModNumber = main.contextIndexes.indexOf(base.currentAdjTg);
  const ModX = ((currentModNumber + 0.5) * 100) / IndexesNumber;
  const isAwaySame = HoveredAdj === AwayHoveredAdj;

  let HeadX;
  let HeadY;
  if (isAwaySame) {
    ({ x: HeadX, y: HeadY } = convPosition(AwayhoveredNou));
  } else {
    HeadX = ((AwayNumber + 0.5) * 100) / IndexesNumber;
    HeadY = 108;
  }

  return {
    ModX,
    HeadX,
    HeadY,
    HomeNumber,
    AwayNumber,
    currentModNumber,
    IndexesNumber,
    isAwaySame,
    isAwayExist,
    AwayHoveredAdj,
    AwayhoveredNou,
    AwayhoveredNouLabel,
    AwayHoveredAdjNou,
    HoveredAdj,
    hoveredNou,
    HoveredAdjNouTgLabel,
    TailX,
    TailY,
  };
};

export default derivedArrow;
