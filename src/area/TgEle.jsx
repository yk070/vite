import useTgBoo from "../convert/useTgBoo.jsx";
import useTgLab from "../convert/useTgLab.jsx";
import useTgCol from "../convert/useTgCol.jsx";
import useTgRun from "../convert/useTgRun.jsx";
import useTgRoo from "../convert/useTgRoo.jsx";
import look from "../style/look.jsx";
import MultiCircle from "../area/MultiCircle.jsx";
import useTgButtonColor from "../convert/useTgButtonColor.jsx";

const TgEle = ({ posiId, styleObj }) => {
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });
  const col = useTgCol({ posiId });
  const buttonColor = useTgButtonColor({ posiId });
  const lab = useTgLab({ posiId });
  const run = useTgRun({ posiId });

  if (boo.isReturn) return null;

  return (
    <div
      style={look.tgButton1(styleObj, roo, col, boo)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.tgButton2(buttonColor)}>
        <span style={look.tgButton3(col)}>{lab.label}</span>
        <div style={look.tgButton8}>
          <MultiCircle level={boo.level} circleColor={col.circleColor} />
        </div>
        {boo.isHomeNoun && <div style={look.tgButton12}></div>}
      </div>
    </div>
  );
};
export default TgEle;
