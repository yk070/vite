import convAcScript from "../../ahk/commentOut/convAcScript.jsx";
import convTgScript from "../convert/convTgScript.jsx";

export const notUseScript = (ctx) => {
  const scriptLines = ctx.usedPrfs?.map((item) => {
    const { ac, tg } = item;

    const script_tg = convTgScript(tg);
    const script_ac = convAcScript(ac);
    return `${script_tg}::${script_ac}\n`;
  });

  const preScript = scriptLines?.join("");
  const hasCtrl =
    ctx.usedPrfs?.some((item) => item.tg.includes("ctrl")) ?? false;

  const script = hasCtrl ? "sc1D::return\n" + preScript : preScript;

  return { script };
};

export default notUseScript;
