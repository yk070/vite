import { ModIndexes, basicIndexes } from "../array/namedMods.jsx";
import AssignConvert from "../convert/AssignConvert.jsx";
import PositionConvert from "../convert/PositionConvert.jsx";
import keyLabelObj from "../obj/keyLabelObj.jsx";
import acConvert from "../convert/acConvert.jsx";
import tgConvert from "../convert/tgConvert.jsx";

const derivedState = (base) => {
  const scriptLines = base.AcTgObjs?.map(({ ac, tg }) => {
    const script_tg = tgConvert(tg);
    const script_ac = acConvert(ac);
    return `$${script_tg} ::${script_ac}\n`;
  });
  const script = scriptLines?.join("");
  const acTgSet = new Set(base.AcTgObjs.map((obj) => `${obj.ac}|${obj.tg}`));

  const isMultiOnHd = base.hdMultiObj?.objs?.every((obj) =>
    acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  const isWoTgNone = base.currentModTg === "none";
  const isWoTgSpace = base.currentModTg === "space";
  const isWoAcBasic = basicIndexes?.includes(base.currentModAc);
  // console.log("isWoAcBasic", isWoAcBasic);
  const isWoAcSd = !!base.sdAcModKey;

  const isModAcOften = base.currentModAc.includes("often");
  const ContextIndexes = base.isWoSpaceHold
    ? [...ModIndexes, "space"]
    : ModIndexes;

  // hovered Tg
  const HoveredModKeyTgLabel = AssignConvert(base.hdModKeyTg);
  const [HoveredMod, HoveredKey] = base.hdModKeyTg?.split("*") ?? [];
  const { x: TailX, y: TailY } = PositionConvert(HoveredKey);
  // away
  const AwayHoveredModKey = base.AcTgObjs?.find(
    (o) => o.ac === base.hdModKeyTg,
  )?.tg;
  const isAwayExist = !!AwayHoveredModKey;
  const [AwayHoveredMod, AwayHoveredKey] = AwayHoveredModKey?.split("*") ?? [];
  const AwayHoveredKeyLabel = keyLabelObj[AwayHoveredKey];
  // arrow position
  const IndexesNumber = ContextIndexes.length;
  const HomeNumber = ContextIndexes.indexOf(HoveredMod);
  const AwayNumber = ContextIndexes.indexOf(AwayHoveredMod);
  const currentModNumber = ContextIndexes.indexOf(base.currentModTg);
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
    isWoTgNone,
    isWoTgSpace,
    isWoAcSd,
    ContextIndexes,
    HoveredModKeyTgLabel,
    TailX,
    TailY,
    HeadX,
    HeadY,
    isAwayExist,
    isAwaySame,
    ModX,
    AwayHoveredMod,
    AwayHoveredKey,
    AwayHoveredKeyLabel,
    // hdMiniObjs,
    IndexesNumber,
    isModAcOften,
    acTgSet,
    isMultiOnHd,
    // cdMiniObjs,
    isWoAcBasic,
    script,
  };
};
export default derivedState;
