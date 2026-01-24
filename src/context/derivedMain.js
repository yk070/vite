import { basicIndexes } from "../array/namedMods.jsx";
import { ModIndexes } from "../array/namedMods.jsx";

const derivedMain = (base) => {
  const acTgSet = new Set(base.AcTgObjs?.map((obj) => `${obj.ac}|${obj.tg}`));
  const isMultiOnHd = base.hdMultiObj?.objs?.every((obj) =>
    acTgSet.has(`${obj.ac}|${obj.tg}`),
  );
  const getContextIndexes = (base) => {
    let indexes = [...ModIndexes];
    if (base.isWoSpaHold) {
      indexes.push("space");
    }
    if (base.isWoMuhHold) {
      indexes.push("muhenkan");
    }
    return indexes;
  };
  const contextIndexes = getContextIndexes(base);

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
