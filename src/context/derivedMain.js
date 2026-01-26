import {
  notAdjAcCaps,
  defaultAdjs,
  virtualVerstiles,
} from "../array/namedArray.js";

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
  const getTgCaps = (base) => {
    if (["spaceHold", "muhHold"].every((k) => base.acTgObjs.includes(k))) {
      return [...defaultAdjs, "space", "muhenkan"];
    }
    if (base.acTgObjs.includes("spaceHold")) {
      return [...defaultAdjs, "space"];
    }
    if (base.acTgObjs.includes("muhHold")) {
      return [...defaultAdjs, "muhenkan"];
    }
    return [...defaultAdjs];
  };

  const tgCaps = getTgCaps(base);

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
    tgCaps,
    isWoTgShift,
    isWoSpaHold,
    isWoMuhHold,
    toggleAcTg,
  };
};
export default derivedMain;
