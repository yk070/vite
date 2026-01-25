import {
  notAdjAcCaps,
  defaultAdjs,
  virtualVerstiles,
} from "../array/namedNous.js";

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
    let indexes = [...defaultAdjs];
    if (base.acTgObjs.includes("spaceHold")) {
      indexes.push("space");
    }
    if (base.acTgObjs.includes("muhHold")) {
      indexes.push("muhenkan");
    }
    return indexes;
  };
  const contextIndexes = getContextIndexes(base);

  const isWoTgNone = base.currentAdjTg === "none";
  const isWoTgVirtual = virtualVerstiles.includes(base.currentAdjTg);
  const isWoTgShift = base.currentAdjTg === "shift";
  const isWoAcBasic = notAdjAcCaps?.includes(base.currentCapAc);

  const isWoAcSd = !!base.sdAcAdjNou;

  const isAdjAcOften = base.currentCapAc.includes("often");

  return {
    isWoTgNone,
    isWoTgVirtual,
    isWoAcSd,
    isAdjAcOften,
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
