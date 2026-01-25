import look from "../style/look.jsx";
import useTgCapCol from "../convert/useTgCapCol.jsx";
import useTgCapRun from "../convert/useTgCapRun.jsx";
import useTgCapLab from "../convert/useTgCapLab.jsx";
import useTgCapBoo from "../convert/useTgCapBoo.jsx";

const TgCap = ({ tgCap }) => {
  const boo = useTgCapBoo({ tgCap });
  const col = useTgCapCol({ tgCap });
  const run = useTgCapRun({ tgCap });
  const lab = useTgCapLab({ tgCap });

  return (
    <div onClick={run.click} style={look.TgCap1}>
      <div style={look.TgCap3(col)}>
        <span style={look.TgCap2(col)}>{lab.label}</span>
      </div>
    </div>
  );
};

export default TgCap;
