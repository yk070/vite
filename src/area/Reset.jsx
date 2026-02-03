import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";

const Reset = () => {
  const ctx = useCtx();
  const click = () => {
    ctx.setPreferences([]);
    ctx.setCurrCapAc("none");
    ctx.setCurrAdjTg("none");
    ctx.setSdAcAdjNou(null);
  };
  return (
    <div onClick={click} style={look.reset1}>
      {"リセット"}
    </div>
  );
};

export default Reset;
