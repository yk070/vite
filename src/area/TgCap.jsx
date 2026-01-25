import look from "../style/look.jsx";
import useTgCapCol from "../convert/useTgCapCol.jsx";
import useTgCapRun from "../convert/useTgCapRun.jsx";
import useTgCapLab from "../convert/useTgCapLab.jsx";

const TgCap = ({ contextIndex }) => {
  const col = useTgCapCol({ contextIndex });
  const run = useTgCapRun({ contextIndex });
  const lab = useTgCapLab({ contextIndex });

  return (
    <div onClick={run.click} style={look.TgCap1}>
      <div style={look.TgCap3(col)}>
        <span style={look.TgCap2(col)}>{lab.label}</span>
      </div>
    </div>
  );
};

export default TgCap;
