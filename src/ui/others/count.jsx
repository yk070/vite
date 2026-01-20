
        const Oj_SgIdMo_No_count = useRef({});
        AySgIdMo_all_tg.forEach(SgIdMo => {
          let count = 0;
          (Oj_SgIdMo_OjMx_tg[SgIdMo] || []).forEach(OjMx => {
            const SgIdKy_origin_pre = OjMx?.SgIdKy; 
            const SgIdKy_origin = OjEnter[SgIdKy_origin_pre] || SgIdKy_origin_pre; 
            const SgIdMoKy_origin = SgIdMo + "*" + SgIdKy_origin; 
            const SgIdLl_tg = Oj_SgIdMoKy_SgIdLl_tg[SgIdMoKy_origin];
            
            const IsBn_lo_not_used = !Object.keys(Oj_SgIdMoKy_SgAyIdMoKySl).includes(SgIdMoKy_origin);
            const IsBn_fx_used = Object.values(Oj_SgIdMoKy_SgAyIdMoKySl)
              .map(s => s.split("+")[0])
              .includes(SgIdMoKy_origin);
            const IsBn_tg_primary = SgIdLl_tg === "first";
            const IsBn_virtual = AySgIdMo_virtual.includes(SgIdMo);
            const IsBn_absent = AySgIdKy_absent.includes(SgIdMoKy_origin);
            if (
              IsBn_tg_primary && IsBn_lo_not_used && ( IsBn_fx_used || IsBn_virtual || IsBn_absent )
            ) {
              count++;
            }
          });
          Oj_SgIdMo_No_count.current[SgIdMo] = count;
        });
        export { Oj_SgIdMo_No_count };