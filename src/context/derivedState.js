import { ModIndexes, basicIndexes } from "../array/namedMods.jsx";

const derivedState = (base) => {
  const acTgSet = new Set(base.AcTgObjs?.map((obj) => `${obj.ac}|${obj.tg}`));
  const isMultiOnHd = base.hdMultiObj?.objs?.every((obj) =>
    acTgSet.has(`${obj.ac}|${obj.tg}`),
  );

  const isWoTgNone = base.currentModTg === "none";
  const isWoTgSpace = base.currentModTg === "space";
  const isWoAcBasic = basicIndexes?.includes(base.currentModAc);
  // console.log("isWoAcBasic", isWoAcBasic);
  const isWoAcSd = !!base.sdAcModKey;

  const isModAcOften = base.currentModAc.includes("often");

  // hovered Tg
  // away
  // arrow position
  return {
    isWoTgNone,
    isWoTgSpace,
    isWoAcSd,
    isModAcOften,
    isMultiOnHd,
    isWoAcBasic,
    acTgSet,
  };
};
export default derivedState;
