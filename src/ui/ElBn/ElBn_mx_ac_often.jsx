import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  pointerWithin,
  closestCorners,
  DragOverlay,
  rectIntersection,
} from "@dnd-kit/core";
///X_X|  🔴ElBn_mx_ac_often
const ElBn_mx_ac_often = (Oj_props) => {
  ///   |    const
  ///X_X ac Oj_props
  const {
    SgCo_block,
    SgCo_modifier_select,
    SgCo_text,
    IsWo_ac_select_phase,
    setAySgIdMoKySl,
    setSgIdMoKy_ac,
    IsWo_tg_select_phase,
    SgLeMxMargin,
    SgLe_tx,
    // used
    IsBn_lo_used,
    IsBn_lo_not_used,
    IsBn_fx_used,
    IsBn_fx_not_used,
    // 特殊
    IsBn_treated_as_ac,
    IsBn_dg,
    IsBn_mass,
    IsBn_overlay,
    // origin
    SgIdMoKy_origin,
    SgTxKy_origin,
    ElTxMoKy_origin,
    SgIdMoKySl_origin,
  } = Oj_props;
  //O_O
  ///X_X useDraggable ac
  let listeners, setNodeRef_mx_draggable, IsBn_mx_ac_Dragging;
  ({
    setNodeRef: setNodeRef_mx_draggable,
    listeners,
    isDragging: IsBn_mx_ac_Dragging,
  } = useDraggable({
    id: `ac:${SgIdMoKy_origin}`,
    data: {
      ...Oj_props,
      IsBn_from_mx_sp: true,
    },
  }));
  //O_O
  //returnの準備
  ///X_X ElTx_ac
  let ElTx_ac = <span>{ElTxMoKy_origin}</span>;
  //O_O
  ///X_X SgCo_ac_outer
  let SgCo_ac_outer = SgCo_block;
  if (IsBn_treated_as_ac) {
    SgCo_ac_outer = SgCo_modifier_select;
  } else if (IsBn_dg) {
    SgCo_ac_outer = SgCo_modifier_select;
  }
  //O_O
  ///X_X SgCo_ac_inner
  let SgCo_ac_inner = "";
  //O_O
  ///X_X SgCo_ac_bg
  let SgCo_ac_bg = SgCo_text;
  if (IsBn_lo_used && IsBn_fx_not_used) {
    SgCo_ac_bg = "#FFEB3B";
  }
  //O_O
  ///X_X Fx_ac
  const Fx_ac = () => {
    if (IsWo_ac_select_phase) {
      setAySgIdMoKySl((AySgIdMoKySl) => [...AySgIdMoKySl, SgIdMoKySl_origin]);
    } else if (IsBn_treated_as_ac) {
      setSgIdMoKy_ac(null);
    } else if (IsWo_tg_select_phase) {
      setSgIdMoKy_ac(SgIdMoKy_origin);
    } else {
      setSgIdMoKy_ac(SgIdMoKy_origin);
    }
  };
  //O_O
  return (
    <>
      {/*X_X divi outer*/}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          boxShadow: "none",
          background: SgCo_ac_outer,
          opacity: IsBn_overlay ? 0.5 : 1,
          zIndex: 10,
        }}
        onClick={Fx_ac}
        id={SgIdMoKy_origin}
        ref={setNodeRef_mx_draggable}
        {...listeners}
        onMouseEnter={() => {}}
        onMouseLeave={(e) => {}}
      >
        {/*O_O*/}
        {/*X_X divi inner*/}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: `calc(100% - ${SgLeMxMargin})`,
            height: `calc(100% - ${SgLeMxMargin})`,
            transform: "translate(-50%, -50%)",
            boxShadow: SgCo_ac_inner,
            background: SgCo_ac_bg,
          }}
        >
          {/*O_O*/}
          {/*X_X テキスト*/}
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "absolute",
              paddingLeft: `${SgLeMxMargin}`,
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              fontSize: `calc(${SgLe_tx})`,
              userSelect: "none",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              borderRadius: "0px",
              fontSleepmily: "'Noto Sans JP', sans-serif",
              color: "black",
              zIndex: 2,
            }}
          >
            {ElTx_ac}
          </span>
          {/*O_O*/}
        </div>
      </div>
    </>
  );
};
//O_O
export default ElBn_mx_ac_often;
