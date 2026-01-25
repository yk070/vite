import look from "../style/look";
import useAcCapBoo from "../convert/useAcCapBoo";
import useAcCapCol from "../convert/useAcCapCol";
import useAcCapRun from "../convert/useAcCapRun";
import useAcCapLab from "../convert/useAcCapLab";

const AcCap = ({ acCap }) => {
  const boo = useAcCapBoo({ acCap });
  const col = useAcCapCol({ acCap });
  const run = useAcCapRun({ acCap });
  const lab = useAcCapLab({ acCap });

  return (
    <div onClick={run.click} style={look.acIndex2}>
      <div style={look.acIndex1(col)}>
        <span style={look.ac_Index_Button2}>{lab.label}</span>
      </div>
    </div>
  );
};
export default AcCap;
