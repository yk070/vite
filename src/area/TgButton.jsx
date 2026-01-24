import useTgBoo from "../convert/useTgBoo.jsx";
import useTgLab from "../convert/useTgLab.jsx";
import useTgCol from "../convert/useTgCol.jsx";
import useRunConvert from "../convert/useRunConvert.jsx";
import useTgRoo from "../convert/useTgRoo.jsx";
import look from "../style/look.jsx";
import MultiCircleDiv from "../area/MultiCircle.jsx";
const TgButton = ({ preKey, styleObj }) => {
  const roo = useTgRoo({ preKey });
  const boo = useTgBoo({ preKey });
  const col = useTgCol({ preKey });
  const lab = useTgLab({ preKey });
  const run = useRunConvert({ preKey });

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
      </div>
    </div>
  );
};
export default TgButton;
