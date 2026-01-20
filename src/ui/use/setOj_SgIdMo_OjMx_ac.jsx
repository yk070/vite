import { useState } from 'react';
import { useAppState } from "../use/useState.jsx";
import AyOjMx from '../Ay/AyOjMx.jsx';
import { AySgIdKy_tg_none_secondary } from '../Ay/AySgIdKy_tg_none.jsx';

export function useOjState() {
            const {
  AySgIdMo_all_ac,
               
            } = useAppState();
  const [Oj_SgIdMo_OjMx_ac, setOj_SgIdMo_OjMx_ac] = useState(() => {
    const Oj_SgIdMo_OjMx_new = {};
    AySgIdMo_all_ac.forEach((SgIdMo) => {
      Oj_SgIdMo_OjMx_new[SgIdMo] = AyOjMx.map(OjMx => ({ ...OjMx }));
    });
    return Oj_SgIdMo_OjMx_new;
  });

  return { Oj_SgIdMo_OjMx_ac, setOj_SgIdMo_OjMx_ac };
}
