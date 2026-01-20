///X_X|  🔴ElBn_mx_ac_mass
const ElBn_mx_ac_mass = (Oj_props) => {
  ///   |    const
  ///X_X ac Oj_props
  const { ElTxMoKy, SgLe_tx, SgLeMxMargin } = Oj_props;
  //O_O
  //returnの準備
  return (
    <>
      {/*X_X divi outer*/}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          boxShadow: "none",
          background: "",
          zIndex: 10,
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
            background: "#999999",
          }}
        >
          {/*O_O*/}
          {/*X_X テキスト*/}
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "absolute",
              paddingLeft: `${SgLeMxMargin}`,
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              fontSize: `calc(${SgLe_tx})`,
              userSelect: "none",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              borderRadius: "0px",
              fontSleepmily: "'Noto Sans JP', sans-serif",
              color: "black",
              zIndex: 2,
            }}
          >
            {ElTxMoKy}
          </span>
          {/*O_O*/}
        </div>
      </div>
    </>
  );
};
//O_O
export default ElBn_mx_ac_mass;
