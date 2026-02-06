import useTgBoo from "../convert/useTgBoo.jsx";
import useTgLab from "../convert/useTgLab.jsx";
import useTgCol from "../convert/useTgCol.jsx";
import useTgRun from "../convert/useTgRun.jsx";
import useTgRoo from "../convert/useTgRoo.jsx";
import look from "../style/look.jsx";
import useTgButtonColor from "../convert/useTgButtonColor.jsx";
import useTgCircle from "../convert/useTgCircle.jsx";
import useTgBooMerge from "../convert/useTgBooMerge.jsx";

const TgEle = ({ posiId, styleObj }) => {
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });
  const merge = useTgBooMerge({ posiId });
  const col = useTgCol({ posiId });
  const buttonColor = useTgButtonColor({ posiId });
  const circle = useTgCircle({ posiId });
  const lab = useTgLab({ posiId });
  const run = useTgRun({ posiId });

  if (merge.isReturn) return null;

  return (
    <div
      style={look.tgButton1(
        styleObj,
        merge.isCursorPointer,
        col.borderColor,
        merge.isHighZ,
      )}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.tgButton2(buttonColor)}>
        <span style={look.tgButton3(col, boo)}>{lab.label}</span>
        <div style={{ ...look.common, ...circle }}></div>
        {boo.isHomeNoun && <div style={look.tgButton12}></div>}
      </div>
    </div>
  );
};
export default TgEle;
