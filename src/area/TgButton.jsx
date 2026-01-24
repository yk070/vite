import useTgBoo from "../convert/useTgBoo.jsx";
import useTgLab from "../convert/useTgLab.jsx";
import useTgCol from "../convert/useTgCol.jsx";
import useRunConvert from "../convert/useRunConvert.jsx";
import useTgRoo from "../convert/useTgRoo.jsx";
import look from "../style/look.jsx";
import MultiCircleDiv from "../area/MultiCircle.jsx";
import TgButtons from "./TgButtons.jsx";
const TgButton = ({ buttonObj }) => {
  const roo = useTgRoo({ buttonObj });
  const boo = useTgBoo({ buttonObj });
  const col = useTgCol({ buttonObj });
  const lab = useTgLab({ buttonObj });
  const run = useRunConvert({ buttonObj });

  if (boo.isNoneAlphabetNumber) return null;

  return (
    <div
      style={look.tgButton1(roo, col, boo)}
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
