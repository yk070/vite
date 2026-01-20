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
import { CgClose } from "react-icons/cg";
///X_X|  🔴ElBn_mx_tg
const ElBn_mx_tg = (Oj_props) => {
  ///   |    const ElBn_mx_tg
  ///X_X Oj_props Tg
  const {
    IsWo_virtual,
    IsWo_hold,
    OjDg,
    SgIdLl_tg_primary,
    SgLe_boxshadow,
    SgIdLl_tg_secondary,
    SgCo_text,
    SgIdLl_tg_disabled,
    SgCo_modifier_select,
    SgLeMxMargin,
    SgLeBase,
    IsWo_dg,
    IsWo_not_ac_select_phase,
    IsWo_ac_select_phase,
    setSgIdMoKy_axis,
    IsWo_tg_select_phase,
    SgIdMoKy_ac,
    setOj_SgIdMoKy_SgAyIdMoKySl,
    SgIdMoKySl_ac,
    setSgIdMoKy_ac,
    setAySgIdMoKySl,
    DeleteMx,
    SgLeMxDel,
    SgLe_tx,
    IsWo_mass,
    setSgIdMoKy_tg,

    //特定のIdに一致
    IsBn_EnterDamy,
    IsBn_EnterSub,
    // used
    IsBn_lo_used,
    IsBn_lo_not_used,
    IsBn_fx_used,
    IsBn_fx_not_used,
    // 特殊
    IsBn_treated_as_tg,
    IsBn_dg,
    IsBn_mo_ky_same,
    IsBn_mx_over,
    IsBn_absent,
    // Co
    IsBn_tg_disabled,
    IsBn_tg_primary,
    IsBn_tg_secondary,
    // attach長さ
    IsBn_attach_single,
    IsBn_attach_multiple,
    //useState
    IsBn_hovered,
    SgIdKy_hovered,
    // origin
    SgIdKy_origin_pre,
    SgIdKy_origin,
    SgIdMoKy_origin,
    SgTxKy_origin,
    ElTxMoKy_origin,
    SgIdLl_tg,
    SgIdLl_ac,
    // attach
    AySgIdMoKySl_attach_from_oj,
    SgAyIdMoKySl_attach,
    SgIdMoKy_attach_first,
    ElTxMoKy_attach__first,
    // set
    SetIsBn_hoveredTrue = () => {},
    SetIsBn_hoveredfalse = () => {},
    // dnd
    IsBn_from_mx_tg,
    IsBn_from_mx_ac,
    IsBn_overlay,
  } = Oj_props;
  //O_O
  ///X_X useDraggable Tg
  let listeners, setNodeRef_mx_draggable, IsBn_mx_tg_Dragging;
  ({
    setNodeRef: setNodeRef_mx_draggable,
    listeners,
    isDragging: IsBn_mx_tg_Dragging,
  } = useDraggable({
    id: `tg:${SgIdMoKy_origin}`,
    disabled: !IsBn_lo_used,
    data: {
      ...Oj_props,
      IsBn_from_mx_tg: true,
    },
  }));
  //O_O
  //returnの準備
  ///X_X ElTx_tg
  let ElTx_tg = <span>{SgTxKy_origin}</span>;
  //0
  if (IsBn_EnterSub) {
    ElTx_tg = null;
  } else if (IsBn_treated_as_tg) {
    ElTx_tg = (
      <span>
        {ElTx_tg}
        <span>↺</span>
      </span>
    );
  } else if (IsBn_tg_disabled) {
    ElTx_tg = null;
  }
  //null
  else if (IsBn_mo_ky_same) {
  } else if ((IsWo_virtual || IsBn_absent) && IsBn_lo_not_used) {
    ElTx_tg = null;
  } else if (IsWo_hold) {
    ElTx_tg = null;
  }
  //normal 0
  else if (IsBn_mx_tg_Dragging) {
  } else if (IsBn_attach_multiple) {
    ElTx_tg = (
      <span>
        {ElTxMoKy_attach__first}
        <span>...</span>
      </span>
    );
  }
  //normal
  else if (IsBn_attach_single) {
    ElTx_tg = ElTxMoKy_attach__first;
  }
  //O_O
  ///X_X SgCo_tg_outer
  let SgCo_tg_outer = "";

  if (IsBn_EnterDamy || (IsBn_mx_over && OjDg.IsBn_from_ta)) {
    SgCo_tg_outer = "";
  } else if (IsBn_mx_over) {
    SgCo_tg_outer = "white";
  }
  //O_O
  ///X_X SgCo_tg_inner
  let SgCo_tg_inner = "";
  if (IsBn_treated_as_tg) {
    SgCo_tg_inner = "red";
  } else if (IsBn_mo_ky_same) {
  } else if (IsBn_overlay) {
  } else if (IsBn_tg_primary) {
    SgCo_tg_inner = `inset 0px 0px 0px ${SgLe_boxshadow} ${SgIdLl_tg_primary}`;
  } else if (IsBn_tg_secondary) {
    SgCo_tg_inner = `inset 0px 0px 0px ${SgLe_boxshadow} ${SgIdLl_tg_secondary}`;
  } else if (IsBn_tg_disabled) {
  } else if (IsBn_mx_tg_Dragging) {
  } else if (IsBn_lo_used) {
    SgCo_tg_inner = SgCo_text;
  } else if (IsBn_mo_ky_same) {
    SgCo_tg_inner = SgIdLl_tg_disabled;
  }
  //O_O
  ///X_X SgCo_tg_bg
  let SgCo_tg_bg = `
                    linear-gradient(80deg, black 0%, #222222 70%, black 100%), 
                    linear-gradient(45deg, black 0%, #333333 70%, black 100%)
                  `;
  if (IsBn_treated_as_tg) {
    SgCo_tg_bg = "red";
  } else if (IsBn_tg_disabled) {
    SgCo_tg_bg = SgIdLl_tg_disabled;
  } else if (IsBn_mx_tg_Dragging) {
  } else if (IsBn_lo_used) {
    SgCo_tg_bg = SgCo_text;
  } else if (IsBn_mo_ky_same) {
    SgCo_tg_bg = SgCo_modifier_select;
  }
  //O_O
  ///X_X SgCo_tg_tx
  let SgCo_tg_tx = SgCo_text;
  if (IsBn_lo_used && !IsBn_dg) {
    SgCo_tg_tx = "black";
  }
  //O_O
  ///X_X No_opacity_tx
  let No_opacity_tx = 1;
  if ((IsWo_virtual || IsBn_absent) && IsBn_lo_used) {
    No_opacity_tx = 1;
  } else if (
    IsBn_fx_used &&
    IsBn_lo_not_used &&
    (IsBn_hovered || IsBn_mx_over)
  ) {
    No_opacity_tx = 0.5;
  } else if (IsBn_fx_used && IsBn_lo_not_used) {
    No_opacity_tx = 0;
  }
  //O_O
  ///X_X Oj style
  const Oj_same = {
    //color: "transparent",
    bottom: `calc(${SgLeMxMargin} / 2)`,
    left: `calc(${SgLeMxMargin})`,
    color: SgCo_text,
    textIndent: "",
    width: "auto",
    height: "auto",
    paddingLeft: `calc(${SgLeMxMargin})`,
    paddingRight: `calc(${SgLeMxMargin})`,
    borderRadius: `calc(${SgLeBase} * 4)`,
    background: "black",
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
          cursor: IsWo_dg ? "grabbing" : IsBn_tg_disabled ? "auto" : "pointer",
          backgroundColor: SgCo_tg_outer,
        }}
        onClick={(e) => {
          if (
            (IsBn_tg_disabled && IsWo_not_ac_select_phase) || //背景カラーの無効ボタン
            (IsWo_ac_select_phase && !IsBn_treated_as_tg) || //テキストカラーで無効化
            IsWo_hold
          ) {
          } //無効化
          else if (IsWo_mass) {
            setSgIdMoKy_axis(SgIdMoKy_origin);
          } else if (IsWo_tg_select_phase) {
            if (SgIdMoKy_ac === SgIdMoKy_origin) {
              return;
            }
            setOj_SgIdMoKy_SgAyIdMoKySl((prev) => ({
              ...prev,
              [SgIdMoKy_origin]: SgIdMoKySl_ac,
            }));
            setSgIdMoKy_ac(null);
          } else if (IsBn_treated_as_tg) {
            //戻る
            setAySgIdMoKySl([]);
            setSgIdMoKy_tg(null);
          } else {
            setSgIdMoKy_tg(SgIdMoKy_origin);
            setAySgIdMoKySl(AySgIdMoKySl_attach_from_oj || []);
          }
        }}
        id={SgIdMoKy_origin}
        ref={setNodeRef_mx_draggable}
        {...listeners}
        onMouseEnter={() => {
          SetIsBn_hoveredTrue();
        }}
        onMouseLeave={(e) => {
          SetIsBn_hoveredfalse();
        }}
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
            background: SgCo_tg_bg,
            boxShadow: SgCo_tg_inner,
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
              color: SgCo_tg_tx,
              opacity: No_opacity_tx,
              zIndex: 2,
            }}
          >
            {ElTx_tg}
          </span>
          {/*O_O*/}
        </div>
        {/*X_X デリート*/}
        <div
          style={{
            display: IsWo_ac_select_phase
              ? "none"
              : IsBn_mx_tg_Dragging && IsBn_lo_used
              ? "none"
              : IsBn_lo_used && !IsBn_EnterSub
              ? "inline-block"
              : "none",
          }}
        >
          <span
            onClick={(e) => {
              e.stopPropagation();
              DeleteMx(SgIdMoKy_origin, SgIdKy_origin);
            }}
            style={{
              background: "",
              width: "1.12em",
              height: "0.8em",
              padding: "0em 0em",
              fontSize: `calc(${SgLeMxDel})`,
              position: "absolute",
              pointerEvents: "auto",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: "0em", // 余分な高さをなくす
              textAlign: "center",
              top: SgLeMxMargin,
              right: SgLeMxMargin,
              borderRadius: "0em",
              zIndex: 2,
            }}
          >
            <CgClose
              style={{
                fontSize: "1.1em",
                position: "absolute",
                top: "-0.15em",
                right: "-0.15em",
                color: "black",
              }}
            />
          </span>
        </div>
        {/*O_O*/}
      </div>
    </>
  );
};
//O_O
export default ElBn_mx_tg;
