import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";

const Reset = () => {
  const ctx = useCtx();
  const click = () => {
    ctx.setPreferences([]);
    ctx.setcurrentCapAc("none");
    ctx.setCurrentAdjTg("none");
    ctx.setSdAcAdjNou(null);
  };
  return (
    <div onClick={click} style={look.reset1}>
      {"リセット"}
    </div>
  );
};

export default Reset;
