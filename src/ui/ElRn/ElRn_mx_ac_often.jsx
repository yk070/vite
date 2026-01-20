import React from "react";

import { useRef, useState, useEffect, useMemo, useLayoutEffect } from "react";

import ElBn_mx_ac_often from "../ElBn/ElBn_mx_ac_often.jsx";
import { SgLeBase, SgLe_tx } from "../Sg/SgLeBase.jsx";
import { SgCo_block } from "../Sg/SgCo.jsx";
import Oj_SgIdKy_SgTxKy from "../Oj/Oj_SgIdKy_SgTxKy.jsx";
import Cv_SgIdMoKy_ElTxMoKy from "../Cv/Cv_SgIdMoKy_ElTxMoKy.jsx";
import { basicIndexes } from "../Ay/AySgIdMo.jsx";
import { useAppState } from "../use/useState.jsx";

///X_X|  🗺ElRn_mx_ac_often
const ElRn_mx_ac_often = ({ AyOj_block }) => {
  const { Oj_SgIdMoKy_SgAyIdMoKySl, OjDg, SgIdMoKy_ac } = useAppState();
  return (
    <>
      {/*X_X divi*/}
      <div
        style={{
          position: "relative",
          flex: 1,
          height: "100%",
          width: "100%",

          display: "flex",
          flexDirection: "column", // ← 縦方向に積む

          boxShadow: "none",
          background: "#333333",
        }}
      >
        {/*O_O*/}
        {AyOj_block.map((Oj_block) => {
          const numRows = Math.ceil(
            Oj_block.AySgId_name.length / Oj_block.No_block
          );
          return (
            <React.Fragment key={Oj_block.SgTx_title}>
              {/*X_X divi*/}
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  width: "100%",

                  display: "flex",
                  flex: numRows,
                  boxShadow: "none",
                  background: SgCo_block,
                }}
              >
                {/*O_O*/}
                {/*X_X ブロック*/}
                <div
                  style={{
                    display: "flex",
                    padding: `calc(${SgLeBase} * 3 )`,
                    width: `calc( 100% - ${SgLeBase} * 30 )`,
                    boxShadow: "none",
                    background: "#777777",
                  }}
                >
                  {/*O_O*/}
                  {/*X_X wrap タイトル*/}
                  <div
                    style={{
                      position: "relative",
                      flex: 1,
                      width: `calc(${SgLeBase} * 80 )`,

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      boxShadow: "none",
                      background: "",
                      fontSize: `calc(${SgLe_tx})`,
                    }}
                  >
                    {Oj_block.SgTx_title}
                  </div>
                  {/*O_O*/}
                  {/*X_X wrap コンテンツ*/}
                  {/*X_X divi*/}
                  <div
                    style={{
                      position: "relative",
                      height: "100%",

                      display: "grid",
                      gridTemplateColumns: `repeat(${Oj_block.No_block}, 1fr)`,
                      flex: 5,

                      boxShadow: "none",
                      background: SgCo_block,
                    }}
                  >
                    {/*O_O*/}
                    {Oj_block.AySgId_name.map((SgId_name) => {
                      ///X_X const
                      ///X_X 基本設定
                      //origin
                      const SgIdMoKy_origin = SgId_name;
                      const SgIdKy_origin = SgIdMoKy_origin.split("*")[1];
                      const SgTxKy_origin = Oj_SgIdKy_SgTxKy[SgIdKy_origin];
                      const ElTxMoKy_origin =
                        Cv_SgIdMoKy_ElTxMoKy(SgIdMoKy_origin);
                      const SgIdMoKySl_origin = `${SgIdMoKy_origin}+1`;
                      //O_O
                      ///X_X IsBn
                      ///X_X IsBn used
                      const IsBn_lo_used = Object.keys(
                        Oj_SgIdMoKy_SgAyIdMoKySl
                      ).includes(SgIdMoKy_origin);
                      const IsBn_lo_not_used = !IsBn_lo_used;
                      const IsBn_fx_used = Object.values(
                        Oj_SgIdMoKy_SgAyIdMoKySl
                      )
                        .map((SgAyIdMoKySl) => SgAyIdMoKySl.split("+")[0])
                        .includes(SgIdMoKy_origin);
                      const IsBn_fx_not_used = !IsBn_fx_used;
                      //O_O
                      ///X_X IsBn 特殊
                      const IsBn_treated_as_ac =
                        SgIdMoKy_ac === SgIdMoKy_origin;
                      const IsBn_dg = SgIdMoKy_origin === OjDg?.SgIdMoKy_origin;
                      //O_O
                      //O_O
                      ///X_X Oj_props
                      const Oj_props = {
                        // used
                        IsBn_lo_used,
                        IsBn_lo_not_used,
                        IsBn_fx_used,
                        IsBn_fx_not_used,
                        // 特殊
                        IsBn_treated_as_ac,
                        IsBn_dg,
                        // origin
                        SgIdMoKy_origin,
                        SgTxKy_origin,
                        ElTxMoKy_origin,
                        SgIdMoKySl_origin,
                      };
                      //O_O
                      //O_O
                      return (
                        <React.Fragment key={SgId_name}>
                          {/*X_X divi*/}
                          <div
                            style={{
                              display: "inline-block", // ← 横並び
                              flex: 1,
                              height: "100%",
                              boxShadow: "none",
                              background: "#666",
                              color: "#fff",
                              textAlign: "center",
                              lineHeight: "160px",
                            }}
                          >
                            {/*O_O*/}
                            <ElBn_mx_ac_often {...Oj_props} />
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                  {/*O_O*/}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
//O_O
export default ElRn_mx_ac_often;
