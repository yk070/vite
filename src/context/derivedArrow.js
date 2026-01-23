import PositionConvert from "../convert/PositionConvert.jsx";
import { ModIndexes } from "../array/namedMods.jsx";
import keyLabelObj from "../obj/keyLabelObj.jsx";
import AssignConvert from "../convert/AssignConvert.jsx";

export const derivedArrow = (base) => {
  const HoveredModKeyTgLabel = AssignConvert(base.hdModKeyTg);
  const [HoveredMod, HoveredKey] = base.hdModKeyTg?.split("*") ?? [];
  const { x: TailX, y: TailY } = PositionConvert(HoveredKey);
  const AwayHoveredModKey = base.AcTgObjs?.find(
    (o) => o.ac === base.hdModKeyTg,
  )?.tg;
  const isAwayExist = !!AwayHoveredModKey;
  const [AwayHoveredMod, AwayHoveredKey] = AwayHoveredModKey?.split("*") ?? [];
  const AwayHoveredKeyLabel = keyLabelObj[AwayHoveredKey];
  const contextIndexes = base.isWoSpaceHold
    ? [...ModIndexes, "space"]
    : ModIndexes;
  const IndexesNumber = contextIndexes.length;
  const HomeNumber = contextIndexes.indexOf(HoveredMod);
  const AwayNumber = contextIndexes.indexOf(AwayHoveredMod);
  const currentModNumber = contextIndexes.indexOf(base.currentModTg);
  const ModX = ((currentModNumber + 0.5) * 100) / IndexesNumber;
  const isAwaySame = HoveredMod === AwayHoveredMod;

  let HeadX;
  let HeadY;
  if (isAwaySame) {
    ({ x: HeadX, y: HeadY } = PositionConvert(AwayHoveredKey));
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
    HoveredKey,
    HoveredModKeyTgLabel,
    TailX,
    TailY,
    contextIndexes,
  };
};

export default derivedArrow;
