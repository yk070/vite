import { useState } from "react";
import { ModIndexesifier } from "../Ay/AySgIdMo.jsx";
import AyOjMx from "../Ay/AyOjMx.jsx";

export function useOj_SgIdMo_OjMx_tg() {
  const [Oj_SgIdMo_OjMx_tg, setOj_SgIdMo_OjMx_tg] = useState(() => {
    const AySgIdMo = [
      ...ModIndexesifier,
      "muhenkan",
      "space",
      "henkan",
      "kana",
    ];
    const Oj_SgIdMo_OjMx_new = {};
    AySgIdMo.forEach((SgIdMo) => {
      Oj_SgIdMo_OjMx_new[SgIdMo] = AyOjMx.map((OjMx) => ({ ...OjMx }));
    });
    return Oj_SgIdMo_OjMx_new;
  });

  return [Oj_SgIdMo_OjMx_tg, setOj_SgIdMo_OjMx_tg];
}
