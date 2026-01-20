// src/components/use/useState.jsx
import { useState } from "react";
import { basicIndexes, ModIndexesifier } from "../Ay/AySgIdMo.jsx";

// カスタムフックにまとめる
export function useAppState() {
  const [SgIdMoKy_axis, setSgIdMoKy_axis] = useState(null);

  const [SgIdMoKy_tg, setSgIdMoKy_tg] = useState(null);
  const IsWo_ac_select_phase = !!SgIdMoKy_tg;
  const IsWo_not_ac_select_phase = !IsWo_ac_select_phase;

  const [SgIdMoKy_ac, setSgIdMoKy_ac] = useState(null);
  const IsWo_tg_select_phase = !!SgIdMoKy_ac;
  const SgIdMoKySl_ac = `${SgIdMoKy_ac}+1`;

  const [AySgIdMoKySl, setAySgIdMoKySl] = useState([]);
  const IsWo_hold = AySgIdMoKySl[0]?.split("+")[0] === "none*hold";
  const IsTaZero = AySgIdMoKySl.length === 0;

  const [OjDg, setOjDg] = useState(null);
  const IsWo_dg = !!OjDg;

  const [SgIdMo_tg, SgIdKy_tg] = SgIdMoKy_tg?.split("*") || [];
  // 注意: Oj_SgIdMo_SgPf と Oj_SgIdKy_SgTxKy は外部依存なので props で受ける方が安全
  const SgTxMo_tg = null;
  const SgTxKy_tg = null;

  const IsWo_tg_present = !!SgIdMoKy_tg;

  const [ScFull, setScFull] = useState("");
  const [Oj_SgIdMoKy_SgAyIdMoKySl, setOj_SgIdMoKy_SgAyIdMoKySl] = useState({});
  const [TgIb, setTgIb] = useState("none");

  const [SgIdMo_tg_display, setSgIdMo_tg_display] = useState("none");

  const [AySgIdMo_virtual, setAySgIdMo_virtual] = useState([]);
  const AySgIdMo_all_ac = [...basicIndexes, ...ModIndexesifier];
  const AySgIdMo_all_tg = [...ModIndexesifier, ...AySgIdMo_virtual];
  const IsWo_virtual = AySgIdMo_virtual.includes(SgIdMo_tg_display);

  const [OjWo_mass, setOjWo_mass] = useState({});

  const [SgIdKy_hovered, setSgIdKy_hovered] = useState(null);

  const [IsWo_mass, setIsWo_mass] = useState(false);

  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  return {
    SgIdMoKy_axis,
    setSgIdMoKy_axis,
    SgIdMoKy_tg,
    setSgIdMoKy_tg,
    IsWo_ac_select_phase,
    IsWo_not_ac_select_phase,
    SgIdMoKy_ac,
    setSgIdMoKy_ac,
    IsWo_tg_select_phase,
    SgIdMoKySl_ac,
    AySgIdMoKySl,
    setAySgIdMoKySl,
    IsWo_hold,
    IsTaZero,
    OjDg,
    setOjDg,
    SgIdMo_tg,
    SgIdKy_tg,
    SgTxMo_tg,
    SgTxKy_tg,
    IsWo_tg_present,
    ScFull,
    setScFull,
    Oj_SgIdMoKy_SgAyIdMoKySl,
    setOj_SgIdMoKy_SgAyIdMoKySl,
    TgIb,
    setTgIb,
    SgIdMo_tg_display,
    setSgIdMo_tg_display,
    AySgIdMo_virtual,
    setAySgIdMo_virtual,
    AySgIdMo_all_ac,
    AySgIdMo_all_tg,
    IsWo_virtual,
    OjWo_mass,
    setOjWo_mass,
    SgIdKy_hovered,
    setSgIdKy_hovered,
    IsWo_mass,
    setIsWo_mass,
    pointerPos,
    setPointerPos,
    IsWo_dg,
  };
}
