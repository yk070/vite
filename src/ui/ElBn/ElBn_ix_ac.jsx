import { useAppState } from "../use/useState.jsx";

const ElBn_ix_ac = (Oj_props) => {
  const {
    SgIdMo_ac_display,
    setSgIdMo_ac_display,
    SgCo_ix_ac_select,
    SgCo_ix_ac_not_select,
    SgCo_text,
  } = useAppState();
  ///X_X Oj_props
  const { SgIdMo } = Oj_props;
  //O_O
  return (
    <div
      onClick={() => {}}
      style={{
        position: "relative",
        flex: 1,
        padding: "0px 0px",
        backgroundColor:
          SgIdMo_ac_display === SgIdMo
            ? SgCo_ix_ac_select
            : SgCo_ix_ac_not_select,
        color: SgCo_text,
        border: "none",
        borderRadius: "0px",
        cursor: "pointer",
        overflow: "visible",
        outline: "none",
        userSelect: "none",
      }}
    >
      <span
        style={{
          fontSize:
            "calc(min((100vh - 40px) * (16 / 9), 100vw - 260px) * 0.04)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {SgIdMo}
      </span>
    </div>
  );
};
export default ElBn_ix_ac;
