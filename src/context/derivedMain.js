import { basicIndexes, ModIndexes, virtualAdjs } from "../array/namedNous.js";

const derivedMain = (base) => {
  const toggleAcTg = (key) => {
    base.setAcTgObjs((prev) =>
      prev.includes(key) ? prev.filter((v) => v !== key) : [...prev, key],
    );
  };

  const isWoSpaHold = base.acTgObjs.includes("spaceHold");
  const isWoMuhHold = base.acTgObjs.includes("muhHold");
  const acTgSet = new Set(base.acTgObjs?.map((obj) => `${obj.ac}|${obj.tg}`));
  const isMultiOnHd = base.hdMultiObj?.objs?.every((obj) =>
    acTgSet.has(`${obj.ac}|${obj.tg}`),
  );
  const getContextIndexes = (base) => {
    let indexes = [...ModIndexes];
    if (base.acTgObjs.includes("spaceHold")) {
      indexes.push("space");
    }
    if (base.acTgObjs.includes("muhHold")) {
      indexes.push("muhenkan");
    }
    return indexes;
  };
  const contextIndexes = getContextIndexes(base);

  const isWoTgNone = base.currentModTg === "none";
  const isWoTgVirtual = virtualAdjs.includes(base.currentModTg);
  const isWoTgShift = base.currentModTg === "shift";
  const isWoAcBasic = basicIndexes?.includes(base.currentModAc);

  const isWoAcSd = !!base.sdAcModKey;

  const isModAcOften = base.currentModAc.includes("often");

  return {
    isWoTgNone,
    isWoTgVirtual,
    isWoAcSd,
    isModAcOften,
    isMultiOnHd,
    isWoAcBasic,
    acTgSet,
    contextIndexes,
    isWoTgShift,
    isWoSpaHold,
    isWoMuhHold,
    toggleAcTg,
  };
};
export default derivedMain;
