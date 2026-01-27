import useTgBoo from "../convert/useTgBoo.jsx";
import useTgLab from "../convert/useTgLab.jsx";
import useTgCol from "../convert/useTgCol.jsx";
import useRunConvert from "../convert/useRunConvert.jsx";
import useTgRoo from "../convert/useTgRoo.jsx";
import look from "../style/look.jsx";
import MultiCircleDiv from "../area/MultiCircle.jsx";
const TgEle = ({ posiId, styleObj }) => {
  const roo = useTgRoo({ posiId });
  const boo = useTgBoo({ posiId });
  const col = useTgCol({ posiId });
  const lab = useTgLab({ posiId });
  const run = useRunConvert({ posiId });

  if (boo.isReturn) return null;

  return (
    <div
      style={look.tgButton1(styleObj, roo, col, boo)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.tgButton2(col)}>
        <span style={look.tgButton3(col)}>{lab.label}</span>
        <span style={look.tgButton8}>
          <MultiCircleDiv level={boo.level} />
        </span>
        {boo.isHomeNoun && <div style={look.tgButton12}></div>}
      </div>
    </div>
  );
};
export default TgEle;
