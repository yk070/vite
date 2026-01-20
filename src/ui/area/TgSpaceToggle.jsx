import Toggle from "./Toggle.jsx";
import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";

const TgSpaceToggle = () => {
  const ctx = useCtx();

  if (!ctx.isWoTgNone) return null;

  return (
    <span style={look.tg3}>
      <span
        style={look.tg5}
        onClick={() => ctx.setisWoSpaceHold((prev) => !prev)}
      >
        <span>{"Space修飾キー化"}</span>
        <Toggle value={ctx.isWoSpaceHold} />
      </span>
    </span>
  );
};

export default TgSpaceToggle;
