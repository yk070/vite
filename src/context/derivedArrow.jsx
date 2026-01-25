import convPosition from "../convert/convPosition.jsx";
import keyLabelObj from "../obj/keyLabelObj.js";
import ConvLabel from "../convert/ConvLabel.jsx";

export const derivedArrow = (base, main) => {
  const HoveredModKeyTgLabel = <ConvLabel modKey={base.hdModKeyTg} />;

  const [HoveredMod, hoveredKey] = base.hdModKeyTg?.split("*") ?? [];
  const { x: TailX, y: TailY } = convPosition(hoveredKey);
  const AwayHoveredModKey = base.acTgObjs?.find(
    (o) => o.ac === base.hdModKeyTg,
  )?.tg;
  const isAwayExist = !!AwayHoveredModKey;
  const [AwayHoveredMod, AwayHoveredKey] = AwayHoveredModKey?.split("*") ?? [];
  const AwayHoveredKeyLabel = keyLabelObj[AwayHoveredKey];

  const IndexesNumber = main.contextIndexes.length;
  const HomeNumber = main.contextIndexes.indexOf(HoveredMod);
  const AwayNumber = main.contextIndexes.indexOf(AwayHoveredMod);
  const currentModNumber = main.contextIndexes.indexOf(base.currentModTg);
  const ModX = ((currentModNumber + 0.5) * 100) / IndexesNumber;
  const isAwaySame = HoveredMod === AwayHoveredMod;

  let HeadX;
  let HeadY;
  if (isAwaySame) {
    ({ x: HeadX, y: HeadY } = convPosition(AwayHoveredKey));
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
    AwayHoveredMod,
    AwayHoveredKey,
    AwayHoveredKeyLabel,
    AwayHoveredModKey,
    HoveredMod,
    hoveredKey,
    HoveredModKeyTgLabel,
    TailX,
    TailY,
  };
};

export default derivedArrow;
