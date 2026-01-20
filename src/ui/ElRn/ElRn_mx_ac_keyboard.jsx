import React from 'react';
import { useOjState } from '../use/setOj_SgIdMo_OjMx_ac.jsx';
import Cv_SgIdMoKy_ElTxMoKy from '../Cv/Cv_SgIdMoKy_ElTxMoKy';  
import ElBn_mx_ac_keyboard from '../ElBn/ElBn_mx_ac_keyboard'; 
import {Oj_SgIdMoKy_SgIdLl_tg} from '../Oj/Oj_SgIdMoKy_SgIdLl.jsx';
import {Oj_SgIdMoKy_SgIdLl_ac} from '../Oj/Oj_SgIdMoKy_SgIdLl.jsx';
import OjEnter from '../Oj/OjEnter.jsx';

import { SgCo_modifier_select } from '../Sg/SgCo.jsx';
import { SgLe_boxshadow } from '../Sg/SgLeBase.jsx';
import { SgCo_text } from '../Sg/SgCo.jsx';
import { SgLeMxMargin } from '../Sg/SgLeBase.jsx'; 
import { SgLe_tx } from '../Sg/SgLeBase.jsx';
import Oj_SgIdMo_SgPf from '../Oj/Oj_SgIdMo_SgPf.jsx';
import Oj_SgIdKy_SgTxKy from '../Oj/Oj_SgIdKy_SgTxKy.jsx';
import { SgIdLl_ac_secondary } from '../Sg/SgCo.jsx';
import { AySgIdKy_peculiar } from '../others/KeyNames.jsx';
import { useAppState } from "../use/useState.jsx";


          const ElRn_mx_ac_keyboard = () => {
            const {
              Oj_SgIdMoKy_SgAyIdMoKySl, SgIdMoKy_ac, IsWo_ac_select_phase,   
              IsWo_hold, SgCo_modifier_select, SgLe_boxshadow, SgIdLl_ac_secondary, SgCo_text,
              IsWo_dg, IsWo_tg_select_phase, SgLeMxMargin, SgLe_tx,
              OjDg, ScFull, SgIdMo_ac_display,
               
            } = useAppState();
             const { Oj_SgIdMo_OjMx_ac, setOj_SgIdMo_OjMx_ac } = useOjState();
            return (
              <>
                {(Oj_SgIdMo_OjMx_ac[SgIdMo_ac_display] || []).map((OjMx) => {
                  ///X_X const
                    ///X_X 基本設定
                      //origin
                        const SgIdKy_origin_pre = OjMx?.SgIdKy; 
                        const SgIdKy_origin = OjEnter[SgIdKy_origin_pre] || SgIdKy_origin_pre; 
                        const SgIdMoKy_origin = SgIdMo_ac_display + "*" + SgIdKy_origin; 
                        const SgTxKy_origin = Oj_SgIdKy_SgTxKy[SgIdKy_origin];
                        const ElTxMoKy_origin = Cv_SgIdMoKy_ElTxMoKy(SgIdMoKy_origin);
                        const SgIdLl_tg = Oj_SgIdMoKy_SgIdLl_tg[SgIdMoKy_origin];
                        const SgIdLl_ac = Oj_SgIdMoKy_SgIdLl_ac[SgIdMoKy_origin];
                        const SgIdMoKySl_origin = `${SgIdMoKy_origin}+1`;
                      //attach
                        const AySgIdMoKySl_attach_from_oj =
                          Oj_SgIdMoKy_SgAyIdMoKySl[SgIdMoKy_origin]?.split("-");
                        const SgAyIdMoKySl_attach = 
                          Oj_SgIdMoKy_SgAyIdMoKySl?.[SgIdMoKy_origin]
                          ?? null;
                        const SgIdMoKy_attach_first = 
                          SgAyIdMoKySl_attach?.split?.("+")?.[0] 
                          ?? null;
                        const ElTxMoKy_attach__first =
                          !!SgIdMoKy_attach_first ? Cv_SgIdMoKy_ElTxMoKy(SgIdMoKy_attach_first) :
                          null; 
                    //O_O
                    ///X_X IsBn
                      ///X_X IsBn 特定のIdに一致
                        const IsBn_EnterDamy = 
                          SgIdKy_origin_pre === "enter_main";
                        const IsBn_EnterSub = 
                          ["enter_below", "enter_above"].includes(SgIdKy_origin_pre);
                      //O_O
                      ///X_X IsBn used
                        const IsBn_lo_used = 
                          Object.keys(Oj_SgIdMoKy_SgAyIdMoKySl)
                            .includes(SgIdMoKy_origin); 
                        const IsBn_lo_not_used =
                          !IsBn_lo_used;
                        const IsBn_fx_used = 
                          Object.values(Oj_SgIdMoKy_SgAyIdMoKySl)
                            .map(SgAyIdMoKySl => SgAyIdMoKySl.split("+")[0]) 
                              .includes(SgIdMoKy_origin); 
                        const IsBn_fx_not_used =
                          !IsBn_fx_used;
                      //O_O
                      ///X_X IsBn 特殊
                        const IsBn_treated_as_ac = 
                          SgIdMoKy_ac === SgIdMoKy_origin; 
                        const IsBn_dg = 
                          SgIdMoKy_origin === OjDg?.SgIdMoKy_origin;
                      //O_O
                      ///X_X IsBn Cd
                        const IsBn_ac_disabled =
                          SgIdLl_ac === "disabled";
                        const IsBn_ac_primary =
                          SgIdLl_ac === "first";
                        const IsBn_ac_secondary =
                          SgIdLl_ac === "second";
                      //O_O
                    //O_O
                    ///X_X Oj_props
                      const Oj_props = { 
                    IsWo_hold,SgCo_modifier_select,SgLe_boxshadow,SgIdLl_ac_secondary,SgCo_text,
                    IsWo_dg,IsWo_ac_select_phase,IsWo_tg_select_phase,SgLeMxMargin,SgLe_tx,
                        // 特定のIdに一致
                          IsBn_EnterDamy, IsBn_EnterSub, 
                        // used
                          IsBn_lo_used, IsBn_lo_not_used,
                          IsBn_fx_used, IsBn_fx_not_used,
                        // 特殊
                          IsBn_treated_as_ac, 
                          IsBn_dg,                  
                        // Co
                          IsBn_ac_disabled,
                          IsBn_ac_primary, IsBn_ac_secondary,
                        // origin
                          SgIdKy_origin_pre, SgIdKy_origin, SgIdMoKy_origin,
                          SgTxKy_origin, ElTxMoKy_origin,
                          SgIdLl_tg, SgIdLl_ac,
                          SgIdMoKySl_origin,
                        // attach
                          AySgIdMoKySl_attach_from_oj,
                          SgAyIdMoKySl_attach, SgIdMoKy_attach_first,
                          ElTxMoKy_attach__first,
                      };
                    //O_O
                  //O_O
                  return (
                    <React.Fragment key={SgIdKy_origin_pre}>
                      {/*X_X divi*/}
                        <div
                          style={{ 
                            position: "absolute",
                            left: OjMx.style.left,
                            top: OjMx.style.top,
                            width: OjMx.style.width,
                            height: OjMx.style.height,
                          }}
                        >
                      {/*O_O*/}
                          <ElBn_mx_ac_keyboard { ...Oj_props }/>
                      </div>
                    </React.Fragment>
                  );
                })}
              </>
            );
          };
        //O_O
        export default ElRn_mx_ac_keyboard;