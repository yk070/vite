
      //ix
        ///X_X   🔴ElBn_ix_tg
          const ElBn_ix_tg = (Oj_props) => {
            ///X_X Oj_props
              const {
                SgIdMo, SgTxMo_ix, No_count, IsBn_virtual,
                IsBn_ix_tg_hovered,SgCo_modifier_not_select,
                SgIdMo_tg_display,SgCo_modifier_select,setSgIdMo_tg_display,
                SgCo_virtual,SgCo_text,SgLe_boxshadow,SgIdLl_tg_primary,  
              } = Oj_props;
            //O_O
                ///X_X SgCo_bg
                  let SgCo_bg = SgCo_modifier_not_select;
                  if (SgIdMo_tg_display === SgIdMo) {
                    SgCo_bg = SgCo_modifier_select;
                  } 
                //O_O
            return (
              <div
                onClick={() => setSgIdMo_tg_display(SgIdMo)}
                style={{
                  position: "relative",
                  flex: 1,
                  padding: "0px 0px",
                  background: SgCo_bg,
                  color: 
                    IsBn_virtual ? SgCo_virtual :
                    SgCo_text,
                  border: "none",
                  borderRadius: "0px",
                  cursor: "pointer",
                  overflow: "visible",
                  outline: "none",
                  boxShadow: `inset 0px 0px 0px ${SgLe_boxshadow} black`, 
                }}
              >
                <span
                  style={{
                    display: "flex",          // ← 横並びにする
                    alignItems: "center",
                    textAlign: "center",   
                    gap: "0.1em",   
                    fontSize: "calc(min((100vh - 40px) * (16 / 9), 100vw - 260px) * 0.04)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    zIndex: 2,
                    userSelect: "none",
                  }}
                >
                  {No_count !== 0 && (
                    <span
                      style={{
                        display: "inline-block",            
                        fontSize: "0.5em",
                        padding: "0 0.4em",
                        color: SgCo_text,
                        background: `
                          linear-gradient(80deg, black 0%, #222222 70%, black 100%), 
                          linear-gradient(45deg, black 0%, #333333 70%, black 100%)
                        `,
                        boxShadow: `inset 0px 0px 0px ${SgLe_boxshadow} ${SgIdLl_tg_primary}`, 
                      }}
                    >
                      {No_count}
                    </span>
                  )}
                  {SgTxMo_ix}
                </span>
              </div>
            );
          };
        //O_O
        export default ElBn_ix_tg;