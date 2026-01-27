import Toggle from "./Toggle.jsx";
import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";

const TgSpaceToggle = () => {
  const ctx = useCtx();

  if (!ctx.isWoTgNone) return null;

  return (
    <span style={look.tg3}>
      <span style={look.tg5} onClick={() => ctx.toggleAcTg("spaceHold")}>
        <span>{"Space 修飾キー化"}</span>
        <Toggle value={ctx.preferences.includes("spaceHold")} />
      </span>
      <span style={look.tg5} onClick={() => ctx.toggleAcTg("muhHold")}>
        <span>{"無変換 修飾キー化"}</span>
        <Toggle value={ctx.preferences.includes("muhHold")} />
      </span>
    </span>
  );
};

export default TgSpaceToggle;
