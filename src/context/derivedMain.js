import { basicIndexes } from "../array/namedMods.jsx";
import { ModIndexes } from "../array/namedMods.jsx";

const derivedMain = (base) => {
  const acTgSet = new Set(base.AcTgObjs?.map((obj) => `${obj.ac}|${obj.tg}`));
  const isMultiOnHd = base.hdMultiObj?.objs?.every((obj) =>
    acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  const contextIndexes = base.isWoSpaceHold
    ? [...ModIndexes, "space"]
    : ModIndexes;

  const isWoTgNone = base.currentModTg === "none";
  const isWoTgSpace = base.currentModTg === "space";
  const isWoAcBasic = basicIndexes?.includes(base.currentModAc);

  const isWoAcSd = !!base.sdAcModKey;

  const isModAcOften = base.currentModAc.includes("often");

  return {
    isWoTgNone,
    isWoTgSpace,
    isWoAcSd,
    isModAcOften,
    isMultiOnHd,
    isWoAcBasic,
    acTgSet,
    contextIndexes,
  };
};
export default derivedMain;
