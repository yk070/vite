import convAcScript from "../convert/convAcScript.jsx";
import convTgScript from "../convert/convTgScript.jsx";

export const derivedScript = (base) => {
  const scriptLines = base.acTgObjs?.map((item) => {
    if (typeof item === "object" && item !== null) {
      const { ac, tg } = item;
      const script_tg = convTgScript(tg);
      const script_ac = convAcScript(ac);
      return `${script_tg}::${script_ac}\n`;
    }
  });

  const script = scriptLines?.join("");

  return { script };
};

export default derivedScript;
