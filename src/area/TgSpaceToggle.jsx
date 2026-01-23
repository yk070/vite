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
        <span>{"Space 修飾キー化"}</span>
        <Toggle value={ctx.isWoSpaceHold} />
      </span>
      <span
        style={look.tg5}
        onClick={() => ctx.setIsWoMuhHold((prev) => !prev)}
      >
        <span>{"無変換 修飾キー化"}</span>
        <Toggle value={ctx.isWoMuhHold} />
      </span>
    </span>
  );
};

export default TgSpaceToggle;
