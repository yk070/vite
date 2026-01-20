import ElRn_mx_ac_often from "./ElRn_mx_ac_often";


          const ElRn_mx_ac_often_parent = ({
            Oj_SgIdMo_block, SgIdMo_ac_display, SgLeBase,
          }) => {
            const AyOj_l1 = Oj_SgIdMo_block[SgIdMo_ac_display].left ;
            const AyOj_r1 = Oj_SgIdMo_block[SgIdMo_ac_display].right ;
            return (
              <>
                {/* 左右2カラム */}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    padding: `calc(${SgLeBase} * 1)`,
                    boxShadow: "none",
                    background: "",
                  }}
                >
                  <ElRn_mx_ac_often AyOj_block={AyOj_l1} />
                  <ElRn_mx_ac_often AyOj_block={AyOj_r1} />
                </div>
              </>
            );
          };
        //O_O
        export default ElRn_mx_ac_often_parent;