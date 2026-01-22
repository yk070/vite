import look from "../style/look.jsx";
import useTgIndexCol from "../convert/useTgIndexCol.jsx";
import useTgIndexRun from "../convert/useTgIndexRun.jsx";
import useTgIndexLab from "../convert/useTgIndexLab.jsx";

const TgIndex = ({ contextIndex }) => {
  const col = useTgIndexCol({ contextIndex });
  const run = useTgIndexRun({ contextIndex });
  const lab = useTgIndexLab({ contextIndex });

  return (
    <div onClick={run.click} style={look.tgIndex1}>
      <div style={look.tgIndex3(col)}>
        <span style={look.tgIndex2(col)}>{lab.label}</span>
      </div>
    </div>
  );
};

export default TgIndex;
