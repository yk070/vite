import { IoWarningOutline } from "react-icons/io5";
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
///X_X|  🔴ElBn_mx_ac_keyboard
const ElBn_mx_ac_keyboard = (Oj_props) => {
  //const
  ///X_X ac Oj_props
  const {
    IsWo_hold,
    SgCo_modifier_select,
    SgLe_boxshadow,
    SgIdLl_ac_secondary,
    SgCo_text,
    IsWo_dg,
    IsWo_ac_select_phase,
    IsWo_tg_select_phase,
    SgLeMxMargin,
    SgLe_tx,
    SgIdLl_ac_primary,
    setAySgIdMoKySl,
    setSgIdMoKy_ac,
    // 特定のIdに一致
    IsBn_EnterDamy,
    IsBn_EnterSub,
    // used
    IsBn_lo_used,
    IsBn_lo_not_used,
    IsBn_fx_used,
    IsBn_fx_not_used,
    // 特殊
    IsBn_treated_as_ac,
    IsBn_dg,
    IsBn_mx_over,
    // Co
    IsBn_ac_disabled,
    IsBn_ac_primary,
    IsBn_ac_secondary,
    //useState
    IsBn_hovered,
    // origin
    SgIdKy_origin_pre,
    SgIdKy_origin,
    SgIdMoKy_origin,
    SgTxKy_origin,
    ElTxMoKy_origin,
    SgTxMo_origin,
    OjDg,
    SgIdLl_ac,
    SgIdMoKySl_origin,
    // attach
    AySgIdMoKySl_attach_from_oj,
    SgAyIdMoKySl_attach,
    SgIdMoKy_attach_first,
    ElTxMoKy_attach__first,
    // dnd
    IsBn_from_mx_tg,
    IsBn_from_mx_ac,
    IsBn_overlay,
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
    disabled: IsBn_ac_disabled,
    data: {
      ...Oj_props,
      IsBn_from_mx_ac: true,
    },
  }));
  //O_O
  //returnの準備
  ///X_X ElTx_ac
  let ElTx_ac = (
    <span>
      {ElTxMoKy_origin}
      <IoWarningOutline
        style={{
          display: IsBn_overlay
            ? "none"
            : IsBn_lo_used && IsBn_fx_not_used
            ? "inline-block"
            : "none",
          color: "red",
        }}
      />
    </span>
  );
  //0
  if (IsBn_EnterSub) {
    ElTx_ac = null;
  }
  //null
  else if (IsWo_hold) {
    ElTx_ac = null;
  } else if (IsBn_ac_disabled) {
    ElTx_ac = null;
  }
  //O_O
  ///X_X SgCo_ac_outer
  let SgCo_ac_outer = null;
  if (IsBn_treated_as_ac) {
    SgCo_ac_outer = SgCo_modifier_select;
  } else if (IsBn_dg) {
    SgCo_ac_outer = SgCo_modifier_select;
  }
  //O_O
  ///X_X SgCo_ac_inner
  let SgCo_ac_inner = "";
  if (IsBn_overlay) {
  } else if (IsBn_ac_disabled) {
  } else if (IsBn_ac_primary) {
    SgCo_ac_inner = `inset 0px 0px 0px ${SgLe_boxshadow} ${SgIdLl_ac_primary}`;
  } else if (IsBn_ac_secondary) {
    SgCo_ac_inner = `inset 0px 0px 0px ${SgLe_boxshadow} ${SgIdLl_ac_secondary}`;
  }
  //O_O
  ///X_X SgCo_ac_bg
  let SgCo_ac_bg = SgCo_text;
  //O_O
  return (
    <>
      {/*X_X divi outer*/}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          boxShadow: "none",
          background: SgCo_ac_outer,
          cursor: IsWo_dg ? "grabbing" : IsBn_ac_disabled ? "auto" : "grab",
          opacity: IsBn_overlay ? 0.5 : 1,
        }}
        onClick={(e) => {
          if (IsWo_ac_select_phase) {
            setAySgIdMoKySl((AySgIdMoKySl) => {
              return [...AySgIdMoKySl, SgIdMoKySl_origin];
            });
          } else if (IsWo_tg_select_phase) {
            setSgIdMoKy_ac(null);
          } else {
            setSgIdMoKy_ac(SgIdMoKy_origin);
          }
        }}
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
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              fontSize: `calc(${SgLe_tx})`,
              textIndent: `${SgLeMxMargin}`,
              textAlign: "left",
              userSelect: "none",
              pointerEvents: "auto",
              whiteSpace: "nowrap",
              padding: "0em 0em",
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

export default ElBn_mx_ac_keyboard;
