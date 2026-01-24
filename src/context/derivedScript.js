import acConvert from "../convert/acConvert.jsx";
import tgConvert from "../convert/tgConvert.jsx";

export const derivedScript = (base) => {
  const scriptLines = base.acTgObjs?.map((item) => {
    if (typeof item === "object" && item !== null) {
      const { ac, tg } = item;
      const script_tg = tgConvert(tg);
      const script_ac = acConvert(ac);
      return `$${script_tg}::${script_ac}\n`;
    }
  });

  const script = scriptLines?.join("");

  return { script };
};

export default derivedScript;
