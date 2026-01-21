const multiObj = {
  none: {
    Esc: [
      { ac: "none*hankaku", tg: "none*henkan" },
      { ac: "none*backspace", tg: "none*capslock" },
      { ac: "none*enter", tg: "none*muhenkan" },
    ],
    半角: [
      { ac: "none*six", tg: "none*f1" },
      { ac: "none*seven", tg: "none*f2" },
      { ac: "none*eight", tg: "none*f3" },
      { ac: "none*nine", tg: "none*f4" },
      { ac: "none*zero", tg: "none*esc" },
    ],
  },
  ctrl: {
    タブ切替: [
      { ac: "ctrl*tab", tg: "ctrl*space" },
      { ac: "ctrl*shift*tab", tg: "ctrl*muhenkan" },
    ],
    ページ進退: [
      { ac: "alt*left", tg: "ctrl*capslock" },
      { ac: "alt*right", tg: "ctrl*tab" },
    ],
    AltTab: [{ ac: "alt*tab", tg: "ctrl*f" }],
  },
  space: {
    Ctrl右手: [
      { ac: "ctrl*z", tg: "space*z" },
      { ac: "ctrl*x", tg: "space*x" },
      { ac: "ctrl*c", tg: "space*c" },
      { ac: "ctrl*v", tg: "space*v" },
      { ac: "ctrl*b", tg: "space*b" },
      { ac: "ctrl*a", tg: "space*a" },
      { ac: "ctrl*s", tg: "space*s" },
      { ac: "ctrl*d", tg: "space*d" },
      { ac: "ctrl*f", tg: "space*f" },
      { ac: "ctrl*g", tg: "space*g" },
      { ac: "ctrl*q", tg: "space*q" },
      { ac: "ctrl*w", tg: "space*w" },
      { ac: "ctrl*e", tg: "space*e" },
      { ac: "ctrl*r", tg: "space*r" },
      { ac: "ctrl*t", tg: "space*t" },
    ],
    Tab進退: [
      { ac: "none*tab", tg: "space*tab" },
      { ac: "shift*tab", tg: "space*capslock" },
    ],
    あ: [{ ac: "alt*tab", tg: "ctrl*f" }],
  },
};
export default multiObj;
