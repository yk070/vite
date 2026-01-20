import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
} from "react";
import DroppableItem from "../others/DroppableItem.jsx";
import { useAppState } from "../use/useState.jsx";
import { useOjState } from "../use/setOj_SgIdMo_OjMx_ac.jsx";
import Cv_SgIdMoKy_ElTxMoKy from "../Cv/Cv_SgIdMoKy_ElTxMoKy";
import OjEnter from "../Oj/OjEnter.jsx";
import { Oj_SgIdMoKy_SgIdLl_tg } from "../Oj/Oj_SgIdMoKy_SgIdLl.jsx";
import { Oj_SgIdMoKy_SgIdLl_ac } from "../Oj/Oj_SgIdMoKy_SgIdLl.jsx";
import Oj_SgIdMo_SgTxMo from "../Oj/Oj_SgIdMo_SgTxMo.jsx";
import Oj_SgIdKy_SgTxKy from "../Oj/Oj_SgIdKy_SgTxKy.jsx";
import { AySgIdKy_absent } from "../Ay/AySgIdKy_absent.jsx";
import ElBn_mx_tg from "../ElBn/ElBn_mx_tg";
import { useOj_SgIdMo_OjMx_tg } from "../use/setOj_SgIdMo_OjMx_tg.jsx";
const ElRn_mx_tg = () => {
  const [IsBn_hovered, setIsBn_hovered] = useState(false);
  const [SgIdKy_hovered, setSgIdKy_hovered] = useState(null);
  const { OjDg, Oj_SgIdMoKy_SgAyIdMoKySl, SgIdMo_tg_display, SgIdMoKy_tg } =
    useAppState();
  const [Oj_SgIdMo_OjMx_tg, setOj_SgIdMo_OjMx_tg] = useOj_SgIdMo_OjMx_tg();
  return (
    <>
      {(Oj_SgIdMo_OjMx_tg[SgIdMo_tg_display] || []).map((OjMx) => {
        const SgIdKy_origin_pre = OjMx?.SgIdKy;
        const SgIdKy_origin = OjEnter[SgIdKy_origin_pre] || SgIdKy_origin_pre;
        const SgIdMoKy_origin = SgIdMo_tg_display + "*" + SgIdKy_origin;
        const SgTxMo_origin = Oj_SgIdMo_SgTxMo[SgIdMo_tg_display] ?? "";
        const SgTxKy_origin = Oj_SgIdKy_SgTxKy[SgIdKy_origin];
        const SgIdLl_tg = Oj_SgIdMoKy_SgAyIdMoKySl[SgIdMoKy_origin]; // 例
        const SgIdLl_ac = Oj_SgIdMoKy_SgAyIdMoKySl[SgIdMoKy_origin]; // 例

        const IsBn_tg_disabled = SgIdLl_tg === "disabled";
        const IsBn_dg = SgIdMoKy_origin === OjDg?.SgIdMoKy_origin;

        const SgAyIdMoKySl_attach =
          Oj_SgIdMoKy_SgAyIdMoKySl?.[SgIdMoKy_origin] ?? null;
        const SgIdMoKy_attach_first =
          SgAyIdMoKySl_attach?.split?.("+")?.[0] ?? null;
        const ElTxMoKy_attach__first = SgIdMoKy_attach_first
          ? Cv_SgIdMoKy_ElTxMoKy(SgIdMoKy_attach_first)
          : null;

        const IsBn_EnterDamy = SgIdKy_origin_pre === "enter_main";
        const IsBn_EnterSub = ["enter_below", "enter_above"].includes(
          SgIdKy_origin_pre
        );
        const IsBn_lo_used = Object.keys(Oj_SgIdMoKy_SgAyIdMoKySl).includes(
          SgIdMoKy_origin
        );
        const IsBn_lo_not_used = !IsBn_lo_used;
        const IsBn_fx_used = Object.values(Oj_SgIdMoKy_SgAyIdMoKySl)
          .map((SgAyIdMoKySl) => SgAyIdMoKySl.split("+")[0])
          .includes(SgIdMoKy_origin);
        const IsBn_fx_not_used = !IsBn_fx_used;
        const IsBn_treated_as_tg =
          SgIdMoKy_origin === SgIdMo_tg_display + "*" + SgIdKy_origin;
        const IsBn_mo_ky_same = SgTxKy_origin === SgTxMo_origin;
        const IsBn_absent = AySgIdKy_absent.includes(SgIdMoKy_origin);
        const IsBn_attach_single = SgAyIdMoKySl_attach?.split("-").length === 1;
        const IsBn_attach_multiple =
          SgAyIdMoKySl_attach?.split("-").length >= 2;

        const Oj_props = {
          IsBn_EnterDamy,
          IsBn_EnterSub,
          IsBn_lo_used,
          IsBn_lo_not_used,
          IsBn_fx_used,
          IsBn_fx_not_used,
          IsBn_treated_as_tg,
          IsBn_dg,
          IsBn_mo_ky_same,
          IsBn_absent,
          IsBn_tg_disabled,
          IsBn_attach_single,
          IsBn_attach_multiple,
          IsBn_hovered,
          SgIdKy_hovered,
          SgIdKy_origin_pre,
          SgIdKy_origin,
          SgIdMoKy_origin,
          SgTxKy_origin,
          ElTxMoKy_attach__first,
          SgTxMo_origin,
          SgIdLl_tg,
          SgIdLl_ac,
          SetIsBn_hoveredTrue: () => {
            setIsBn_hovered(true);
            setSgIdKy_hovered(SgIdKy_origin);
          },
          SetIsBn_hoveredfalse: () => setIsBn_hovered(false),
        };

        return (
          <DroppableItem
            key={SgIdMoKy_origin}
            OjMx={OjMx}
            SgIdMoKy_origin={SgIdMoKy_origin}
            IsBn_tg_disabled={IsBn_tg_disabled}
            IsBn_dg={IsBn_dg}
            Oj_props={Oj_props}
          />
        );
      })}
    </>
  );
};

export default ElRn_mx_tg;
