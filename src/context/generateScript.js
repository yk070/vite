import acConvert from "../convert/acConvert.jsx";
import tgConvert from "../convert/tgConvert.jsx";

export const generateScript = (base) => {
  const scriptLines = base.AcTgObjs?.map(({ ac, tg }) => {
    const script_tg = tgConvert(tg);
    const script_ac = acConvert(ac);
    return `$${script_tg}::${script_ac}\n`;
  });

  const script = scriptLines?.join("");

  return { script };
};

export default generateScript;
